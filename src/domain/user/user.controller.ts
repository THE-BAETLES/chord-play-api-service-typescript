import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostUserRequest } from 'src/types/api/request/user/PostUser.request';
import { DeleteSheetResponse } from 'src/types/api/response/sheet/DeleteSheet.response';
import { GetUserSheetCollectionResponse } from 'src/types/api/response/user/GetUserSheetCollection.response';
import { GetUserVideoCollectionResponse } from 'src/types/api/response/user/GetUserVideoCollection.response';
import { PostUserResponse } from 'src/types/api/response/user/PostUser.response';

@Controller('user')
@ApiTags('유저 API')
export class UserController {
  constructor() {}

  @ApiOperation({ summary: '유저 생성', description: '유저를 생성합니다. performer_grade 정보와 signup_favorite정보가 필요합니다.' })
  @ApiCreatedResponse({ description: '생성된 유저 정보입니다.', type: PostUserResponse })
  @Post()
  async createUser(@Headers('Authorization') accessToken: string, @Body() postUserRequest: PostUserRequest) {}

  @ApiOperation({ summary: '유저 악보 콜렉션', description: '특정 유저의 악보 콜렉션 목록을 반환합니다.' })
  @ApiCreatedResponse({ description: '악보 콜렉션 정보입니다.', type: GetUserSheetCollectionResponse })
  @Get('/collection/sheets')
  async getMySheetCollection(@Headers('Authorization') accessToken: string) {}

  @ApiOperation({ summary: '유저 비디오 콜렉션', description: '특정 유저의 비디오 콜렉션 목록을 반환합니다.' })
  @ApiCreatedResponse({ description: '비디오 콜렉션 정보입니다.', type: GetUserVideoCollectionResponse })
  @Get('/collection/videos')
  async getMyVideoCollection(@Headers('Authorization') accessToken: string) {}
}
