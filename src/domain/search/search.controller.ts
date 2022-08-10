import { Controller, Get, Headers, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiPayloadTooLargeResponse, ApiTags } from '@nestjs/swagger';
import { GetRecommendationVideoRequest } from 'src/types/api/request/recommendation/GetRecommendationVideo.request';
import { GetRecommendationVideoResponse } from 'src/types/api/response/recommendation/GetRecommendationVideo.response';
import { GetConditionSheetResponse } from 'src/types/api/response/sheet/GetConditionSheet.response';
import { GetSheetResponse } from 'src/types/api/response/sheet/GetSheet.response';

@Controller('v1/search')
@ApiTags('검색 API')
export class SearchController {
  constructor() {}
  @Get('/:serachQuery')
  @ApiOperation({ summary: '검색', description: 'query에 대한 곡 목록을 가져옵니다' })
  @ApiCreatedResponse({ type: GetRecommendationVideoResponse })
  async getSerachResults(@Headers('Authorization') accessToken: string, @Param('searchQuery') searchQuery: string) {}
}
