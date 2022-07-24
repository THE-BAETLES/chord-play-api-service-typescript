import { MongoConfigType } from "./mongo.config";
import * as dotenv from 'dotenv'
import * as path from "path";
import { Logger } from "@nestjs/common";

if(process.env.NODE_ENV === 'development') {
    dotenv.config({path: ".development.env"})
    Logger.log(".development.env")
} else {
    dotenv.config({path: ".production.env"})
}

export interface ConfigType {
    mongo: MongoConfigType;
}

export default (): ConfigType => ({
    mongo: {
        endpoint: process.env.MONGO_ENDPOINT,
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        port:process.env.MONGO_PORT,
        database: process.env.MONGO_DATABASE
    }
})

