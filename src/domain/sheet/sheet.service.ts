import { Inject, Injectable, Logger } from '@nestjs/common';
import { Response } from 'express';
import { Model } from 'mongoose';
import { SheetDocumnet } from 'src/schemas/sheet.schema';
import { SheetDataDocument } from 'src/schemas/sheetData.schema';
import { VideoDocument } from 'src/schemas/video.schema';
import { PostCreateAISheetRequest } from 'src/types/api/request/PostCreateAISheet.request';
import { ProgressService } from '../progress/progress.service';
import { SHEET_DATA } from './sheet.provider';
import { SHEET_MODEL } from './sheet.provider';
import { SHEET_DATA_MODEL } from './sheet.provider';
@Injectable()
export class SheetService {
    constructor(
        private progressService: ProgressService,
        @Inject('VIDEO_MODEL') private video: Model<VideoDocument>,
        @Inject(SHEET_DATA_MODEL) private sheetData: Model<SheetDataDocument>,
        @Inject(SHEET_MODEL) private sheet: Model<SheetDocumnet>
    ){}

    private async createAISheetSchema(createAIRequest: PostCreateAISheetRequest){
        const videoId = createAIRequest.videoId;
        const createdAISheet = new this.sheet({video_id: videoId});
        await createdAISheet.save();
    }

    async createAISheet(createAIRequest: PostCreateAISheetRequest, res: Response){
        /**
         * CreateAiSheet Business logic
         * 2. if sheet_data exist return sheet_data as payload with status 3
         * 3. if sheet_data doesn`t exist create sheet schema and start long polling
         * 4. sheet_data will create by inference server u don`t care about that on this server
         */
        const {videoId, status} = createAIRequest;
        await this.createAISheetSchema(createAIRequest);
        await this.progressService.on(videoId, status, res);
        await this.progressService.start(createAIRequest, res);
    }
}
