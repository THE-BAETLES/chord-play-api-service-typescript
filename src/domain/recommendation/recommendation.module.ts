import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { VideoModule } from '../video/video.module';
import { RecommendationService } from './recommendation.service';
import { RecommendationController } from './recommendation.controller';
import { UserModule } from '../user/user.module';
@Module({
  imports: [HttpModule, VideoModule, UserModule],
  providers: [RecommendationService],
  exports: [RecommendationService],
  controllers: [RecommendationController],
})
export class RecommendationModule {}
