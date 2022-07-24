import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiController } from './api.controller';
import configuration from './configs/configuration';
import { HistoryService } from './domain/history/history.service';
import { RecommendationService } from './domain/recommendation/recommendation.service';
import { VideoService } from './domain/video/video.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]})
  ],
  controllers: [ApiController],
  providers: [RecommendationService, VideoService, HistoryService],
})
export class ApiModule {}
