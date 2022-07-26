import { Logger } from '@nestjs/common';
import {Connection} from 'mongoose';
import { VideoSchema } from '../../schemas/video.schema';
export const VideoProvider = [{
    provide: 'VIDEO_MODEL',
    useFactory: (connection: Connection) => 
    {
        const videoCollection = connection.model('VIDEO',VideoSchema,'VIDEO');
        return connection.model('VIDEO', VideoSchema)
    },
    inject: ['MONGO_CONNECTION']
}]