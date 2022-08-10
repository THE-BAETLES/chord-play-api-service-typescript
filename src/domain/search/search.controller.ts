import { Controller, Get, Headers, Param, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiPayloadTooLargeResponse, ApiTags } from '@nestjs/swagger';
import { GetRecommendationVideoResponse } from 'src/types/api/response/recommendation/GetRecommendationVideo.response';

@Controller('v1/search')
@ApiTags('검색 API')
export class SearchController {
  constructor() {}
  @Get()
  @ApiOperation({ summary: '검색', description: 'query에 대한 곡 목록을 가져옵니다' })
  @ApiCreatedResponse({ type: GetRecommendationVideoResponse })
  async getSerachResults(@Headers('Authorization') accessToken: string, @Query('searchTitle') searchTitle: string) {}
}
