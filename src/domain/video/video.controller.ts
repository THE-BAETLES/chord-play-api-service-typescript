import { Body, Controller, Get, Header, Headers, Param, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetGradeVideoCollectionResponse } from 'src/types/api/response/video/GetGradeVideoCollection.response';
import { PerformerGrade } from 'src/schemas/user.schema';
import { PostVideoResponse } from 'src/types/api/response/video/PostVideo.response';
import { access } from 'fs';
import { stringify } from 'querystring';
import { PostVideoRequest } from 'src/types/api/request/video/PostVideo.request';
import { GetVideoResponse } from 'src/types/api/response/video/GetVideo.response';
@Controller('v1/videos')
@ApiTags('비디오 API')
export class VideoController {
  constructor() {}

  @ApiOperation({ summary: '단계 선택 비디오 목록', description: '사용자 수준에 맞는 선택 곡 목록을 반환합니다.' })
  @ApiCreatedResponse({ description: '사용자 수준에 맞는 선택곡 목록입니다.', type: GetGradeVideoCollectionResponse })
  @Get('/grade-collection')
  async getGradeVideoCollection(@Headers('Authorization') accessToken: string, @Query('performerGrade') preformerGrade: PerformerGrade) {}

  @ApiOperation({ summary: '비디오 조회', description: '비디오를 조회합니다.' })
  @ApiCreatedResponse({ description: '조회된 비디오 데이터입니다.', type: GetVideoResponse })
  @Get('/:id')
  async getVideo(@Headers('Authorization') accessToken, @Param('id') id: string) {}

  @ApiOperation({ summary: '비디오 생성', description: '비디오를 생성합니다.' })
  @ApiCreatedResponse({ description: '생성된 비디오 데이터입니다.', type: PostVideoResponse })
  @Post('/:id')
  async createVideo(@Headers('Authorization') accessToken, @Body() postVideoRequest: PostVideoRequest) {}
}
