import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { HistoryService } from './domain/history/history.service';
import { RecommendationService } from './domain/recommendation/recommendation.service';
import { PostSignUpResponse } from './types/api/response/PostSignUp.response';

@Controller('v1')
export class ApiController {
  constructor(private recommendationService: RecommendationService,
     private historyService: HistoryService) {}

  @Post('signup')
  async signUp(): Promise<PostSignUpResponse>{
    return {
      status: 'FAILED',
      payload: 'EXCEPTION'
    }
  }

  @Get('watch-history:user_id')
  async watchHistory(@Param('user_id') user_id: string, @Query('offset') offset: number, @Query('limit') limit: number) {
    return this.historyService.findSubset(user_id, offset, limit)
  }

  @Get('recommendation:user_id')
  async recommendation(@Param('user_id') user_id: string, @Query('offset') offset: number, @Query('limit') limit: number): Promise<any> {
    const recommendationResults = await this.recommendationService.getRecommendation(user_id, offset, limit);
    return recommendationResults;
  }

}
