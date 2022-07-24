import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiController } from './api.controller';
import configuration from './configs/configuration';
import { MongoModule } from './database/mongo/mongo.module';
import { RecommendationModule } from './domain/recommendation/recommendation.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]})
  ],
  controllers: [ApiController, MongoModule, RecommendationModule],
  providers: [],
})
export class ApiModule {}
