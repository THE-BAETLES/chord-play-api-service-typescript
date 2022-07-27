import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiController } from './api.controller';
import configuration from './configs/configuration';
import { HistoryModule } from './domain/history/history.module';
import { RecommendationModule } from './domain/recommendation/recommendation.module';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from './domain/user/user.module';
import { SqsModule } from './infra/sqs/sqs.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]}),
      HttpModule,
      RecommendationModule,
      HistoryModule,
      UserModule,
      SqsModule
  ],
  controllers: [ApiController],
  providers: [],
})
export class ApiModule {}
