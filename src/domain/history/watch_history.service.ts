import { Inject, Injectable } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { WatchHistoryDocument } from 'src/schemas/watch_history.schema';

@Injectable()
export class WatchHistoryService {
  constructor(@Inject('WATCH_HISTORY_MODEL') private historyModel: Model<WatchHistoryDocument>) {}

  async create() {}

  async findAll(userId: string): Promise<WatchHistoryDocument[]> {
    return this.historyModel.find({ user_id: userId }).sort({ last_played: -1 }).exec();
  }

  async findSubset(userId: string, offset: number, limit: number): Promise<WatchHistoryDocument[]> {
    return this.historyModel.find({ user_id: userId }).skip(offset).sort({ last_played: -1 }).limit(limit).exec();
  }
}
