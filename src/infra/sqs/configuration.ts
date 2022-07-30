import { Logger } from '@nestjs/common';
import { AwsConfigType } from 'src/configs/aws.config';
import { InferenceQueueConfigType } from 'src/configs/inferenceQueue.config';
import { MongoConfigType } from 'src/configs/mongo.config';
import { RecommendationConfigType } from 'src/configs/recommendation.config';
import { RedisConfigType } from 'src/configs/redis.config';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: 'development.env' });
  Logger.log('.development.env');
} else {
  Logger.log('.production.env');
  dotenv.config({ path: 'production.env' });
}

export interface ConfigType {
  mongo: MongoConfigType;
  redis: RedisConfigType;
  recommendation: RecommendationConfigType;
  aws: AwsConfigType;
  inferenceQueue: InferenceQueueConfigType;
}

export default (): ConfigType => ({
  mongo: {
    endpoint: process.env.MONGO_ENDPOINT,
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DATABASE,
  },
  redis: {
    endpoint: process.env.PROGRESS_REDIS_ENDPOINT,
    port: process.env.PROGRESS_REDIS_PORT,
  },
  recommendation: {
    endpoint: process.env.RECOMMENDATION_ENDPOINT,
    port: process.env.RECOMMENDATION_PORT,
  },
  aws: {
    region: process.env.AWS_REGION || 'ap-northeast-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretKey: process.env.AWS_SECRET_KEY,
  },
  inferenceQueue: {
    url: process.env.INFERENCE_QUEUE_URL,
    apiVersion: process.env.INFERENCE_QUEUE_URL || '2012-11-05',
  },
});
