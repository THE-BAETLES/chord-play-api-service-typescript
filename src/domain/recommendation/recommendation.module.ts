import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { VideoModule } from '../video/video.module';
import { RecommendationService } from './recommendation.service';
@Module({
  imports: [HttpModule, VideoModule],
  providers: [RecommendationService],
  exports: [RecommendationService],
})
export class RecommendationModule {}
