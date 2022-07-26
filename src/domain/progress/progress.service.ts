import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from '@redis/client';

@Injectable()
export class ProgressService {

    constructor(@Inject('PROGRESS_CONNECTION') private connection: RedisClientType){}

    async on(channel: string, handler: (message: any) => void){
        this.connection.subscribe(channel, handler)
    }

    async off(channel: string){
        this.connection.unsubscribe(channel)
    }
}
