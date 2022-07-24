import * as mongoose from "mongoose"
import { ConfigService } from "@nestjs/config"
import { Logger } from "@nestjs/common"
import { MongoConfigType } from "src/configs/mongo.config";
import { Connection } from "mongoose";

export const MongoDBProvider = [{
    provide: 'MONGO_CONNECTION',
    useFactory: (configuration: ConfigService): Promise<typeof mongoose> => {
        Logger.log("Mongo connection start");
        const {user, password, endpoint} = configuration.get<MongoConfigType>('mongo');
        return mongoose.connect(`mongodb://${user}:${password}@${endpoint}`,{
            'dbName': 'chordplay'
        });
    },
    inject: [ConfigService]
}]

