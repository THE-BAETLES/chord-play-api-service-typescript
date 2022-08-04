import { Module } from '@nestjs/common';
import { MongoModule } from 'src/database/mongo/mongo.module';
import { WatchHistoryService } from './watch_history.service';
import { WatchHistoryProvider } from './watch_history.provider';
import { WatchHistoryController } from './watch_history.controller';
@Module({
  imports: [MongoModule],
  providers: [...WatchHistoryProvider, WatchHistoryService],
  exports: [...WatchHistoryProvider, WatchHistoryService],
  controllers: [WatchHistoryController],
})
export class WatchHistoryModule {}
