import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { HistoryService } from './domain/history/history.service';
import { RecommendationService } from './domain/recommendation/recommendation.service';
import { GetRecommendationRequest } from './types/api/request/GetRecommendation.request';
import { PostSignUpResponse } from './types/api/response/PostSignUp.response';

@Controller('v1')
export class ApiController {
  constructor(private recommendationService: RecommendationService,
     private historyService: HistoryService,
     private progressRedisService) {}

  @Post('signup')
  async signUp(): Promise<PostSignUpResponse>{
    return {
      status: 'FAILED',
      payload: 'EXCEPTION'
    }
  }

  @Get('recommendation:user_id')
  async recommendation(@Param('user_id') user_id: string, @Query('number') number: number): Promise<any> {
    const recommendationRequest: GetRecommendationRequest = {
      params: {
        user_id: user_id
      },
      query: {
        number: number
      }
    }
    const recommendationResults = await this.recommendationService.getRecommendation(recommendationRequest);
    return recommendationResults;
  }

}
