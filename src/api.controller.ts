import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GetRecommendationRequest } from './types/api/request/GetRecommendation.request';
import { PostSignUpResponse } from './types/api/response/PostSignUp.response';

@Controller('v1')
export class ApiController {
  constructor() {}

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
        number: number
      },
      pathVariable: {
        user_id: user_id
      }
    }
  }

}
