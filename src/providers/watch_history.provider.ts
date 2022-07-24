import {Connection} from 'mongoose';
import { VideoSchema } from '../schemas/video.schema';
import { WatchHistorySchema } from 'src/schemas/watch_history.schema';

export const WatchHistoryProvider = {
    provide: 'WATCH_HISTORY',
    useFactory: (connection: Connection) => connection.model('WATCH_HISTORY', WatchHistorySchema),
    inject: ['MONGO_CONNECTION']
}