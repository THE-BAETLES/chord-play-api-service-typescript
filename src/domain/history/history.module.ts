import { Module } from '@nestjs/common';
import { MongoModule } from 'src/database/mongo/mongo.module';
import { HistoryService } from './history.service';
import { WatchHistoryProvider } from './watch_history.provider';
@Module({
    imports: [MongoModule],
    providers: [...WatchHistoryProvider, HistoryService],
    exports: [...WatchHistoryProvider,HistoryService]
})
export class HistoryModule {}
