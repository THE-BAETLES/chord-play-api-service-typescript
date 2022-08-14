import { Body, Controller, Delete, Get, Headers, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostUserRequest } from 'src/types/api/request/user/PostUser.request';
import { PostUserSignUpFavoriteRequest } from 'src/types/api/request/user/PostUserSignUpFavorite.request';
import { PostUserVideoCollectionRequest } from 'src/types/api/request/user/PostUserVideoCollection.request';
import { DeleteSheetResponse } from 'src/types/api/response/sheet/DeleteSheet.response';
import { GetUserSheetCollectionResponse } from 'src/types/api/response/user/GetUserSheetCollection.response';
import { GetUserSignUpFavoriteResponse } from 'src/types/api/response/user/GetUserSignUpFavorite.response';
import { GetUserVideoCollectionResponse } from 'src/types/api/response/user/GetUserVideoCollection.response';
import { PostUserResponse } from 'src/types/api/response/user/PostUser.response';
import { PostUserSignUpFavoriteResponse } from 'src/types/api/response/user/PostUserSignUpFavorite.response';
import { PostUserVideoCollectionResponse } from 'src/types/api/response/user/PostUserVideoCollection.response';

@Controller('v1/user')
@ApiTags('유저 API')
export class UserController {
  constructor() {}

  @Delete('/collection/videos/:videoId')
  @ApiOperation({ summary: '비디오 컬렉션 삭제', description: '비디오 컬렉션 목록에 비디오 정보를 삭제합니다.' })
  @ApiCreatedResponse({ description: '삭제된 비디오 아이디 정보입니다.', type: PostUserVideoCollectionResponse })
  async deleteVideoCollection(@Headers('Authorization') acccessToken: string, @Param('videoId') videoId: string) {}

  @Post('/collection/videos')
  @ApiOperation({ summary: '비디오 컬렉션 추가', description: '비디오 컬렉션 목록에 비디오 정보를 추가합니다.' })
  @ApiCreatedResponse({ description: '생성된 비디오 아이디 정보입니다.', type: PostUserVideoCollectionResponse })
  async createVideoCollection(@Headers('Authorization') accessToken: string, @Body() postUserVideoCollectionRequest: PostUserVideoCollectionRequest) {}

  @ApiOperation({ summary: '유저 생성', description: '유저를 생성합니다. performer_grade 정보와 signup_favorite정보가 필요합니다.' })
  @ApiCreatedResponse({ description: '생성된 유저 정보입니다.', type: PostUserResponse })
  async createUser(@Headers('Authorization') accessToken: string, @Body() postUserRequest: PostUserRequest) {}

  @Get('/collection/videos')
  @ApiOperation({ summary: '유저 비디오 콜렉션', description: '특정 유저의 비디오 콜렉션 목록을 반환합니다.' })
  @ApiCreatedResponse({ description: '비디오 콜렉션 정보입니다.', type: GetUserVideoCollectionResponse })
  async getMyVideoCollection(@Headers('Authorization') accessToken: string) {}

  @Get('/signup-favorite')
  @ApiOperation({ summary: '유저 회원가입 선호 비디오 조회', description: '특정 유저가 회원가입할때의 선택한 곡 목록을 가져옵니다.' })
  @ApiCreatedResponse({ description: '유저 회원가입 선호 비디오 목록입니다.', type: GetUserSignUpFavoriteResponse })
  async getFavorite() {}

  @Post('/signup-favorite')
  @ApiOperation({ summary: '유저 회원가입 선호 비디오 생성', description: '특정 유저가 회원가입시 선택한 곡 목록 정보를 생성합니다.' })
  @ApiCreatedResponse({ description: '', type: PostUserSignUpFavoriteResponse })
  async createFavorite(@Headers('Authorization') accessToken: string, @Body() postUserSignUpFavoriteRequest: PostUserSignUpFavoriteRequest) {}
}
