import { Inject, Injectable } from '@nestjs/common';
import e, { Response } from 'express';
import { Model } from 'mongoose';
import { CreateAISheetMessage } from 'src/message/createAISheet.message';
import { SheetDocumnet } from 'src/schemas/sheet.schema';
import { SheetDataDocument } from 'src/schemas/sheetData.schema';
import { VideoDocument } from 'src/schemas/video.schema';
import { PostCreateAISheetRequest } from 'src/types/api/request/PostCreateAISheet.request';
import { ProgressService } from '../progress/progress.service';

@Injectable()
export class SheetService {
    private timer;

    constructor(
        private progressService: ProgressService,
        @Inject('VIDEO_MODEL') private video: Model<VideoDocument>,
        @Inject('SHEET_DATA_MODEL') private sheetData: Model<SheetDataDocument>,
        @Inject('SHEET_MODEL') private sheet: Model<SheetDocumnet>
    ){}

    async isStatusSame(createAIRequest: PostCreateAISheetRequest): Promise<boolean> {
        const progressStatus = await this.progressService.check(createAIRequest.videoId);
        return progressStatus === createAIRequest.status;
    }

    async stopPolling(){
        clearTimeout(this.timer);
    }

    async sheetCreatedHandler(videoId: string, res: Response) {
        const sheetData: SheetDataDocument = await this.sheetData.findOne({'_id': videoId}).exec();
        res.status(200).send({
            status: 3,
            payload: sheetData
        })
    }

    async statusChangeHandler(videoId, progressStatus, res) {
        if(progressStatus === 3) {
            await this.sheetCreatedHandler(videoId, res);
        }
        res.status(200).send({status: progressStatus, payload: null});
    }

    async checkAndSend(createAIRequest: PostCreateAISheetRequest, res) {
        const {videoId, status} = createAIRequest;
        const progressStatus = await this.progressService.check(createAIRequest.videoId);
        if(progressStatus !== status) {
            await this.statusChangeHandler(videoId, progressStatus, res);
        }
    }


    async startPooling(createAIRequest: PostCreateAISheetRequest, res){
        this.checkAndSend(createAIRequest, res);
        this.timer = async () => {
            this.checkAndSend(createAIRequest, res);
            res.status(200).end();
        }, 10000
    }
    
    async createAISheet(createAIRequest: PostCreateAISheetRequest, res: Response){
        const {videoId, status} = createAIRequest;

        //TODO: Create Empty Sheet Schema
        //TODO: SendMessage to inference sqs

        this.startPooling(createAIRequest, res);
        const findHandler = async (message: CreateAISheetMessage) => {
            if(message.status != status) {
                this.stopPolling();
                res.status(200).send(message);
            }
        }
        this.progressService.on(videoId, findHandler);
        //long polling 10s
        while(true) {}
    }
    async createSheet(){

    }

}
