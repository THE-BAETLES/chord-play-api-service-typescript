import { ConfigService } from "@nestjs/config";
import { RedisConfigType } from "src/configs/redis.config";
import { createClient } from "redis";
import { getURI } from "src/utils/path";
import { Logger } from "@nestjs/common";
export const progressProvider = [{
    provide: 'PROGRESS_CONNECTION',
    useFactory: async (configuration: ConfigService) => {
        Logger.log("Redis Connect start");
        const {endpoint, port} = configuration.get<RedisConfigType>('redis');
        const uri = getURI({protocol: 'redis', host: endpoint, port: port});
        Logger.log("uri = ", uri);
        const client = createClient({
            url: uri
        })
        client.on('error', () => {
            Logger.log("Redis connection error");
        })
        await client.connect();
        const test = client.duplicate().connect();
        return client
    },
    inject: [ConfigService]
}]