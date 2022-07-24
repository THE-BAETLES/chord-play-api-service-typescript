import { MongoConfigType } from "./mongo.config";
import * as dotenv from 'dotenv'
import * as path from "path";
import { Logger } from "@nestjs/common";
import { RedisConfigType } from "./redis.config";
import { RecommendationConfigType } from "./recommendation.config";

if(process.env.NODE_ENV === 'development') {
    dotenv.config({path: "development.env"})
    Logger.log(".development.env")
} else {
    Logger.log(".production.env")
    dotenv.config({path: "production.env"})
}

export interface ConfigType {
    mongo: MongoConfigType;
    redis: RedisConfigType;
    recommendation: RecommendationConfigType
}

export default (): ConfigType => ({
    mongo: {
        endpoint: process.env.MONGO_ENDPOINT,
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        port:process.env.MONGO_PORT,
        database: process.env.MONGO_DATABASE
    },
    redis: {
        endpoint: process.env.PROGRESS_REDIS_ENDPOINT,
        port: process.env.PROGRESS_REDIS_PORT
    },
    recommendation: {
        endpoint: process.env.RECOMMENDATION_ENDPOINT,
        port: process.env.RECOMMENDATION_PORT
    }
})

