import { Inject, Injectable, Logger } from '@nestjs/common';
import { Response } from 'express';
import { Model } from 'mongoose';
import { SheetDocument } from 'src/schemas/sheet.schema';
import { SheetDataDocument } from 'src/schemas/sheetData.schema';
import { VideoDocument } from 'src/schemas/video.schema';
import { ProgressService } from '../progress/progress.service';
import { SHEET_MODEL } from './sheet.provider';
import { SHEET_DATA_MODEL } from './sheet.provider';
import { SqsService } from 'src/infra/sqs/sqs.service';
import { PostCreateAISheetRequest } from 'src/types/api/request/sheet/PostCreateAISheet.request';

@Injectable()
export class SheetService {
  constructor(
    private progressService: ProgressService,
    @Inject('VIDEO_MODEL') private video: Model<VideoDocument>,
    @Inject(SHEET_DATA_MODEL) private sheetData: Model<SheetDataDocument>,
    @Inject(SHEET_MODEL) private sheet: Model<SheetDocument>,
    private sqsService: SqsService,
  ) {}

  private async createAISheetSchema(createAIRequest: PostCreateAISheetRequest) {
    const videoId = createAIRequest.videoId;
    // TODO: Check is data exist already
    const video = await this.sheet.find({ video_id: videoId }).exec();

    // If data already exist continue
    if (video.length !== 0) return;

    const createdAISheet = new this.sheet({ video_id: videoId });
    await createdAISheet.save();
  }

  async createAISheet(createAIRequest: PostCreateAISheetRequest, res: Response) {
    /**
     * CreateAiSheet Business logic
     * 2. if sheet_data exist return sheet_data as payload with status 3
     * 3. if sheet_data doesn`t exist create sheet schema and start long polling
     * 4. sheet_data will create by inference server u don`t care about that on this server
     * 추후에 알림 서비스를 사용하는 것도 고려해봐야함 (ex. FCM)
     */

    console.log(createAIRequest);
    const { videoId, status } = createAIRequest;
    const clientStatus = status;
    await this.createAISheetSchema(createAIRequest);
    await this.progressService.checkAndSend(createAIRequest, res, videoId);

    Logger.log('Send Message');
    await this.sqsService.sendCreateSheetMessage({
      videoId: videoId,
    });

    await this.progressService.attachProgressHandlerToChannel(videoId, clientStatus, res);
    await this.progressService.startPolling(createAIRequest, res, videoId);
  }
}
