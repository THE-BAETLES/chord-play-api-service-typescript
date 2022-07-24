import {Connection} from 'mongoose';
import { VideoSchema } from '../../schemas/video.schema';
export const VideoProvider = [{
    provide: 'VIDEO_MODEL',
    useFactory: (connection: Connection) => connection.model('VIDEO', VideoSchema),
    inject: ['MONGO_CONNECTION']
}]