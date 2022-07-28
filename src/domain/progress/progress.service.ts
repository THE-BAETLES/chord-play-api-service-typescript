import { Inject, Injectable, Logger } from '@nestjs/common';
import { RedisClientType } from '@redis/client';
import { PostCreateAISheetRequest } from 'src/types/api/request/PostCreateAISheet.request';
import {Response} from "express";
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
    @Inject(SHEET_DATA_MODEL) private sheetData: Model<SheetDataDocument>){}
    
    private async checkAndSend(createAIRequest: PostCreateAISheetRequest, res: Response, channel: string) {
        const {videoId, status} = createAIRequest;
        const progressStatus = await this.check(createAIRequest.videoId);
        if(progressStatus != status) {
            await this.statusChangeHandler(videoId, progressStatus, res, channel);
        }
    }

    private async statusChangeHandler(videoId, progressStatus, res, channel: string){
        if(progressStatus == 3) {
            await this.sheetCreatedHandler(videoId, res, channel);
        }
        await this.send({status: progressStatus, payload: null},res, channel);
    }

    private async sheetCreatedHandler(videoId: string, res: Response, channel: string) {
        const sheetData: SheetDataDocument = await this.sheetData.findOne({'_id': videoId}).exec();
        await this.send({
            status: 3,
            payload: sheetData
        }, res, channel)
      
    }

    private async startPolling(createAIRequest: PostCreateAISheetRequest, res: Response, channel: string){
        await this.checkAndSend(createAIRequest, res, channel);
        this.timer = setTimeout(async () => {
            await this.checkAndSend(createAIRequest, res, channel);
            res.status(200).send({
                status: createAIRequest.status,
                payload: null
            });
            resolve
        }, 10000)
       
    }

    private async stopPolling(){
        clearTimeout(this.timer);
    }

    async start(createAIRequest: PostCreateAISheetRequest, res: Response){
        const {videoId, status} = createAIRequest;
        await this.startPolling(createAIRequest, res, videoId);
    }

    async stop(channel: string){
        await this.stopPolling();
        await this.off(channel);
    }

    private async send(message: CreateAISheetMessage | PostCreateAISheetResponse, res: Response, channel: string) {
        this.stop(channel);
        res.status(200).send(message);
    }


    async attachProgressHandlerToChannel(channel: string,  status: number, res: Response){
        const progressSubHandler = (message : Buffer) => {

            const sheetMessage: CreateAISheetMessage = JSON.parse(message.toString());
            const progressStatus = sheetMessage.status;
            
            if(progressStatus != status) {
                this.send(sheetMessage, res,channel);
            }
        }

        await this.connection.subscribe(channel,progressSubHandler, true);
    }

    private async off(channel: string){
        await this.connection.unsubscribe(channel)
    }

    private async check(videoId: string): Promise<number>{
        return Number(await this.checkConnection.get(videoId))
    }
}
