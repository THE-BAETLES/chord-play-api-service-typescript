import { Module } from '@nestjs/common';
import { sheetProvider } from './sheet.provider';
import { SheetService } from './sheet.service';
import { VideoModule } from '../video/video.module';
import { SqsModule } from 'src/infra/sqs/sqs.module';
@Module({
    imports: [VideoModule, SqsModule],
    providers: [SheetService, ...sheetProvider],
    exports: [SheetService, ...sheetProvider]

})
export class SheetModule {
}
