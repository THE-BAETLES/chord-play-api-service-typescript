import { Module } from '@nestjs/common';
import { sheetProvider } from './sheet.provider';
import { SheetService } from './sheet.service';
import { VideoModule } from '../video/video.module';
import { SqsModule } from 'src/infra/sqs/sqs.module';
import { MongoModule } from 'src/database/mongo/mongo.module';
import { ProgressModule } from '../progress/progress.module';
@Module({
    imports: [VideoModule, SqsModule, MongoModule, ProgressModule],
    providers: [SheetService, ...sheetProvider],
    exports: [SheetService, ...sheetProvider]

})
export class SheetModule {
}
