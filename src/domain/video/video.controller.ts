import { Controller, Get, Headers, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetGradeVideoCollectionResponse } from 'src/types/api/response/video/GetGradeVideoCollection.response';
import { PerformerGrade } from 'src/schemas/user.schema';
@Controller('v1/videos')
@ApiTags('비디오 API')
export class VideoController {
  constructor() {}

  @ApiOperation({ summary: '단계 선택 비디오 목록', description: '사용자 수준에 맞는 선택 곡 목록을 반환합니다.' })
  @ApiCreatedResponse({ description: '사용자 수준에 맞는 선택곡 목록입니다.', type: GetGradeVideoCollectionResponse })
  @Get('/grade-collection')
  async getGradeVideoCollection(@Headers('Authorization') accessToken: string, @Query('performerGrade') preformerGrade: PerformerGrade) {}
}
