import { Inject, Injectable, Logger } from '@nestjs/common';
import { RedisClientType } from '@redis/client';
import { PostCreateAISheetRequest } from 'src/types/api/request/PostCreateAISheet.request';
import { Response } from 'express';
import { Model } from 'mongoose';
import { SheetDataDocument } from 'src/schemas/sheetData.schema';
import { PostCreateAISheetResponse } from 'src/types/api/response/PostCreateAISheet.response';
import { CreateAISheetMessage } from 'src/message/redis/createAISheet.message';
import { resolve } from 'path';
import { SUBSCRIBE_PROGRESS_CONNECTION } from './progress.provider';
import { CHECK_PROGRESS_CONNECTION } from './progress.provider';
import { SHEET_DATA_MODEL } from '../sheet/sheet.provider';
@Injectable()
export class ProgressService {
  private timer;
  constructor(
    @Inject(SUBSCRIBE_PROGRESS_CONNECTION) private connection: RedisClientType,
    @Inject(CHECK_PROGRESS_CONNECTION) private checkConnection: RedisClientType,
    @Inject(SHEET_DATA_MODEL) private sheetData: Model<SheetDataDocument>,
  ) {}

  async checkAndSend(createAIRequest: PostCreateAISheetRequest, res: Response, channel: string) {
    const { videoId, status } = createAIRequest;
    const progressStatus = await this.checkProgressStatus(createAIRequest.videoId);
    if (progressStatus != status) {
      await this.statusChangeHandler(videoId, progressStatus, res, channel);
    }
  }

  private async statusChangeHandler(videoId: string, progressStatus: number, res, channel: string) {
    if (progressStatus === 3) {
      await this.sheetCreatedHandler(videoId, res, channel);
    }
    await this.finishTransaction({ status: progressStatus }, res, channel);
  }

  private async sheetCreatedHandler(videoId: string, res: Response, channel: string) {
    const sheetData: SheetDataDocument = await this.sheetData.findOne({ _id: videoId }).exec();
    await this.finishTransaction(
      {
        status: 3,
      },
      res,
      channel,
    );
  }
  s;
  async startPolling(createAIRequest: PostCreateAISheetRequest, res: Response, channel: string) {
    await this.checkAndSend(createAIRequest, res, channel);
    this.timer = setTimeout(async () => {
      await this.checkAndSend(createAIRequest, res, channel);
      res.status(200).send({
        status: createAIRequest.status,
      });
    }, 10000);
  }

  private async stopPolling() {
    clearTimeout(this.timer);
  }

  async stop(channel: string) {
    await this.stopPolling();
    await this.off(channel);
  }
  // finish transaction 으로 변경
  // 1. 작동하는코드
  // 2. 최대한 edge 케이스를 생각해본다 예외 상황!
  // 3. 네이밍이 정확하게 메소드가 하는 역할을 잘 표현하고 있는지
  // 4. imperative: 명령한다? declartive: 다른 엔지니어가 볼때 바로 이해할수 있게 하는 것 (어떻게 how)를 추상화시킴 원하는 것을 주세요
  // 다른 사람이 처음봤을때 이해할수있도록 네이밍하는게 중요함 어떻게 동작하는지는 중요하지 않음
  private async finishTransaction(message: CreateAISheetMessage | PostCreateAISheetResponse, res: Response, channel: string) {
    this.stop(channel);
    res.status(200).send(message);
  }

  async attachProgressHandlerToChannel(channel: string, clientStatus: number, res: Response) {
    const progressHandler = (message: Buffer) => {
      const sheetMessage: CreateAISheetMessage = JSON.parse(message.toString());
      const serverStatus = sheetMessage.status;
      if (serverStatus != clientStatus) {
        this.finishTransaction(sheetMessage, res, channel);
      }
    };
    await this.connection.subscribe(channel, progressHandler, true);
  }

  private async off(channel: string) {
    await this.connection.unsubscribe(channel);
  }

  private async checkProgressStatus(videoId: string): Promise<number> {
    return Number(await this.checkConnection.get(videoId));
  }
}
