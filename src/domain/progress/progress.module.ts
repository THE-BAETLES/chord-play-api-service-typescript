import { Module } from '@nestjs/common';
import { MongoModule } from 'src/database/mongo/mongo.module';
import { sheetProvider } from '../sheet/sheet.provider';
import { progressProvider } from './progress.provider';
import { ProgressService } from './progress.service';
@Module({
  imports: [MongoModule],
  providers: [...progressProvider, ProgressService, ...sheetProvider],
  exports: [...progressProvider, ProgressService],
})
export class ProgressModule {}
