import { Controller, Get, Header, Headers, Param, Post, Query, Req } from '@nestjs/common';
import { HistoryService } from './domain/history/history.service';
import { RecommendationService } from './domain/recommendation/recommendation.service';
import { UserService } from './domain/user/user.service';
import { PostSignUpResponse } from './types/api/response/PostSignUp.response';
import { Request } from '@nestjs/common';

@Controller('v1')
export class ApiController {
  constructor(private recommendationService: RecommendationService,
     private userService: UserService,
     private historyService: HistoryService) {}

  @Post('signup')
  async signUp(): Promise<PostSignUpResponse>{
    return {
      status: 'FAILED',
      payload: 'EXCEPTION'
    }
  }

  @Get('aisheet')
  async createAISheet(@Request() req: any) {
  }

  @Get('watch-history')
  async watchHistory(@Headers('Authorization') accessToken: string ,@Query('offset') offset: number, @Query('limit') limit: number) {
    const user_id = await this.userService.getUserId(accessToken);
    return this.historyService.findSubset(user_id, offset, limit)
  }

  @Get('recommendation')
  async recommendation(@Headers('Authorization') accessToken: string, @Query('offset') offset: number, @Query('limit') limit: number): Promise<any> {
    const user_id = await this.userService.getUserId(accessToken);
    const recommendationResults = await this.recommendationService.getRecommendation(user_id, offset, limit);
    return recommendationResults;
  }

}
