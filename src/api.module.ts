import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiController } from './api.controller';
import configuration from './configs/configuration';
import { HistoryService } from './domain/history/history.service';
import { RecommendationService } from './domain/recommendation/recommendation.service';
import { UserService } from './domain/user/user.service';
import { VideoService } from './domain/video/video.service';
import { HistoryModule } from './domain/history/history.module';
import { RecommendationModule } from './domain/recommendation/recommendation.module';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from './domain/user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]}),
      HttpModule,
      RecommendationModule,
      HistoryModule,
      UserModule
  ],
  controllers: [ApiController],
  providers: [],
})
export class ApiModule {}
