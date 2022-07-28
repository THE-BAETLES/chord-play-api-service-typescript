import { Logger } from '@nestjs/common';
import {Connection} from 'mongoose';
import { VideoSchema } from '../../schemas/video.schema';
import { MONGO_CONNECTION } from 'src/database/mongo/mongodb.providers';
export const VIDEO_MODEL = 'VIDEO_MODEL';
export const VIDEO = 'VIDEO';
export const VideoProvider = [{
    provide: VIDEO_MODEL,
    useFactory: (connection: Connection) => 
    {
        const videoCollection = connection.model(VIDEO,VideoSchema,VIDEO);
        return connection.model(VIDEO, VideoSchema)
    },
    inject: [MONGO_CONNECTION]
}]