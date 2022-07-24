import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/configs/configuration';
import { MongoDBProvider } from './mongodb.providers';
@Module({
    providers: [...MongoDBProvider],
    exports: [...MongoDBProvider]
}) 
export class MongoModule {}
