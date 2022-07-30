import { ConfigService } from '@nestjs/config';
import { RedisConfigType } from 'src/configs/redis.config';
import { createClient } from 'redis';
import { getURI } from 'src/utils/path';
import { Logger } from '@nestjs/common';

export const SUBSCRIBE_PROGRESS_CONNECTION = 'SUBSCRIBE_PROGRESS_CONNECTION';
export const CHECK_PROGRESS_CONNECTION = 'CHECK_PROGRESS_CONNECTION';

export const progressProvider = [
  {
    provide: SUBSCRIBE_PROGRESS_CONNECTION,
    useFactory: async (configuration: ConfigService) => {
      Logger.log('Redis Connect start');
      const { endpoint, port } = configuration.get<RedisConfigType>('redis');
      const uri = getURI({ protocol: 'redis', host: endpoint, port: port });
      const client = createClient({
        url: uri,
      });
      client.on('error', () => {
        Logger.log('Redis connection error');
      });
      await client.connect();
      return client;
    },
    inject: [ConfigService],
  },
  {
    provide: CHECK_PROGRESS_CONNECTION,
    useFactory: async (configuration: ConfigService) => {
      Logger.log('Redis Connect start');
      const { endpoint, port } = configuration.get<RedisConfigType>('redis');
      const uri = getURI({ protocol: 'redis', host: endpoint, port: port });
      const client = createClient({
        url: uri,
      });
      client.on('error', () => {
        Logger.log('Redis connection error');
      });
      await client.connect();
      return client;
    },
    inject: [ConfigService],
  },
];
