import { Module } from '@nestjs/common';
import { sheetProvider } from './sheet.provider';
import { SheetService } from './sheet.service';
import { VideoModule } from '../video/video.module';

@Module({
    imports: [VideoModule],
    providers: [SheetService, ...sheetProvider],
    exports: [SheetService, ...sheetProvider]

})
export class SheetModule {
}
