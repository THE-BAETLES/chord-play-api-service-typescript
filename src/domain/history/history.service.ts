import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'mongoose';

@Injectable()
export class HistoryService {
    constructor(@Inject('MONGO_CONNECTION') private mongoConnection: Connection){
        
    }
}
