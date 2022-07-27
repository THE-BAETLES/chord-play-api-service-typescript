import { Inject, Injectable, Logger } from '@nestjs/common';
import { Response } from 'express';
import { Model } from 'mongoose';
import { SheetDocumnet } from 'src/schemas/sheet.schema';
import { SheetDataDocument } from 'src/schemas/sheetData.schema';
import { VideoDocument } from 'src/schemas/video.schema';
import { PostCreateAISheetRequest } from 'src/types/api/request/PostCreateAISheet.request';
import { ProgressService } from '../progress/progress.service';

@Injectable()
export class SheetService {
    constructor(
        private progressService: ProgressService,
        @Inject('VIDEO_MODEL') private video: Model<VideoDocument>,
        @Inject('SHEET_DATA_MODEL') private sheetData: Model<SheetDataDocument>,
        @Inject('SHEET_MODEL') private sheet: Model<SheetDocumnet>
    ){}

    private async createAISheetSchema(createAIRequest: PostCreateAISheetRequest){
        const videoId = createAIRequest.videoId;
        const createdAISheet = new this.sheet({video_id: videoId});
        await createdAISheet.save();
    }

    async createAISheet(createAIRequest: PostCreateAISheetRequest, res: Response){
        const {videoId, status} = createAIRequest;
        //TODO: Send Message to SQS
        //TODO: Create Empty Sheet Schema
        await this.createAISheetSchema(createAIRequest);
        await this.progressService.on(videoId, status, res);
        await this.progressService.start(createAIRequest, res);
    }
}
