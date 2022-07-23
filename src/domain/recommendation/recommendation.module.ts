import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
@Module({
    imports: [HttpModule],
    providers: [RecommendationService],
    exports: [RecommendationService]
})
export class RecommendationModule {}
