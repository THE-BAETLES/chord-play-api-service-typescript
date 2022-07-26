import { ConfigService } from "@nestjs/config";
import { RedisConfigType } from "src/configs/redis.config";
import { createClient } from "redis";

export const progressProvider = [{
    provide: 'PROGRESS_CONNECTION',
    useFactory: async (configuration: ConfigService) => {
        const {endpoint, port} = configuration.get<RedisConfigType>('redis');
        const client = createClient({url: endpoint})
    },
    inject: [ConfigService]
}]