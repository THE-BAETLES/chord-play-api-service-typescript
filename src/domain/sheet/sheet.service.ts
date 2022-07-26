import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VideoDocument } from 'src/schemas/video.schema';
import { ProgressService } from '../progress/progress.service';

@Injectable()
export class SheetService {
    private timer;
    constructor(
        private progressService: ProgressService,
        @Inject('VIDEO_MODEL') private video: Model<VideoDocument>
    ){}
    
    async createAISheet(res: Response){

        const findHandler = () => {

        }

        const finalHandler = () => {

        }

        // this.progressService.on('')
        while(true) {
            
        }
    }
}
