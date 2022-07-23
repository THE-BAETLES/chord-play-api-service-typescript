import { Module } from '@nestjs/common';
import { MongoDBProvider } from './mongodb.providers';
@Module({
    providers: [...MongoDBProvider],
    exports: [...MongoDBProvider]
}) 
export class MongoModule {}
