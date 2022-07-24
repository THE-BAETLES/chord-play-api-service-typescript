import { Inject, Injectable } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { WatchHistoryDocument } from 'src/schemas/watch_history.schema';

@Injectable()
export class HistoryService {
    constructor(@Inject('WATCH_HISTORY_MODEL') private historyModel: Model<WatchHistoryDocument>){

    }

    async create(){
        
    }

    async findAll(): Promise<WatchHistoryDocument[]>{
        return this.historyModel.find().sort({'last_played': -1}).exec();

    }

    async findSubset(offset: number, limit: number): Promise<WatchHistoryDocument[]>{
        return this.historyModel.find().skip(offset).sort({'last_played': -1}).limit(limit).exec();
    }
    
}
