import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RecommendationService } from './recommendation.service';
import { Headers } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetRecommendationVideoResponse } from 'src/types/api/response/recommendation/GetRecommendationVideo.response';

@Controller('v1/recommendation')
@ApiTags('추천 API')
export class RecommendationController {
  constructor(private userService: UserService, private recommendation: RecommendationService) {}

  @Get()
  @ApiOperation({
    summary: '특정 유저에 대한 추천 목록 가져오기',
    description: '특정 유저에 대한 추천 목록을 가져옵니다 [offset, offset+limit -1] 범위의 데이터를 가져옵니다',
  })
  @ApiCreatedResponse({ description: '악보 추천 응답 데이터입니다', type: GetRecommendationVideoResponse })
  async getRecommendation(
    @Headers('Authorization') accessToken: string,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Promise<GetRecommendationVideoResponse> {
    const userId = await this.userService.getUserId(accessToken);
    const recommendationResults = await this.recommendation.getRecommendation(userId, offset, limit);
    return {
      number: recommendationResults.length,
      recommendation_list: recommendationResults,
    };
  }
}
