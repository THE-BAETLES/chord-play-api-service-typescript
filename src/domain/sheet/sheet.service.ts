import { Inject, Injectable, Logger } from '@nestjs/common';
import { create } from 'domain';
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

    private async createAISheetSchema(createAIRequest: PostCreateAISheetRequest){
        const videoId = createAIRequest.videoId;
        const createdAISheet = new this.sheet({video_id: videoId});
        await createdAISheet.save();
    }

    async createAISheet(createAIRequest: PostCreateAISheetRequest, res: Response){
        const {videoId, status} = createAIRequest;
        //TODO: Create Empty Sheet Schema
        await this.createAISheetSchema(createAIRequest);
        // off 를 호출하려면 listener 를 알아야 함
        await this.progressService.on(videoId, status, res);
        await this.progressService.start(createAIRequest, res);
    }
}
