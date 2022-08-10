import { Body, Controller, Delete, Get, Param, Post, Res, UsePipes, Headers, Logger, Inject, Put, Header, Query, Patch } from '@nestjs/common';
import { ApiCreatedResponse, ApiExtension, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AISheetPipe } from 'src/validation/aisheet.pipe';
import { UserService } from '../user/user.service';
import { SheetService } from './sheet.service';
import { Response } from 'express';
import { GetSheetDataResponse } from 'src/types/api/response/sheet/GetSheetData.response';
import { GetConditionSheetResponse } from 'src/types/api/response/sheet/GetConditionSheet.response';
import { GetSheetResponse } from 'src/types/api/response/sheet/GetSheet.response';
import { DeleteSheetResponse } from 'src/types/api/response/sheet/DeleteSheet.response';
import { PatchSheetResponse } from 'src/types/api/response/sheet/PatchSheet.response';
import { PatchSheetRequest } from 'src/types/api/request/sheet/PatchSheet.request';
import { PostAISheetResponse } from 'src/types/api/response/sheet/PostAISheet.response';
import { PostSheetResponse } from 'src/types/api/response/sheet/PostSheet.response';
import { PostSheetRequest } from 'src/types/api/request/sheet/PostSheet.request';
import { PostAISheetRequest } from 'src/types/api/request/sheet/PostAISheet.request';
import { GetSheetLikeResponse } from 'src/types/api/response/sheet/GetSheetLike.response';
import { PostSheetLikeRequest } from 'src/types/api/request/sheet/PostSheetLike.request';
import { PostSheetLikeResponse } from 'src/types/api/response/sheet/PostSheetLike.response';

@Controller('v1/sheets')
@ApiTags('악보 API')
export class SheetController {
  constructor(@Inject('TEST_DECO') Test, private sheetService: SheetService, private userService: UserService) {}

  @Get('/my')
  @ApiOperation({ summary: '내가 만든 악보 목록', description: '내 악보 목록을 가져옵니다.' })
  @ApiCreatedResponse()
  async getMySheet(@Headers('Authorization') accessToken: string, @Query('videoId') videoId: string) {}

  @Get('/like')
  @ApiOperation({ summary: '좋아요한 악보 목록', description: '좋아요한 악보 목록을 가져옵니다.' })
  @ApiCreatedResponse({ description: '좋아요 악보 데이터입니다.', type: GetSheetLikeResponse })
  async getLikeSheet(@Headers('Authorization') accessToken: string, @Query('videoId') videoId: string) {}

  @Post('/like')
  @ApiOperation({ summary: '좋아요 악보 추가', description: '좋아요한 악보를 추가합니다.' })
  @ApiCreatedResponse({ type: PostSheetLikeResponse })
  async createLikeSheet(@Headers('Authorization') accessToken: string, @Body() createLikeSheetBody: PostSheetLikeRequest) {}

  @Delete('/like/:sheetId')
  @ApiOperation({ summary: '좋아요 악보 삭제', description: '좋아요한 악보를 삭제합니다.' })
  @ApiCreatedResponse({ type: PostSheetLikeResponse })
  async deleteLikeSheet(@Headers('Authorization') accessToken: string, @Param('sheetId') sheetId: string) {}

  @Get('/shared')
  @ApiOperation({ summary: '공유된 악보 목록', description: '공유된 악보 목록을 가져옵니다.' })
  @ApiCreatedResponse()
  async getSharedSheetData(@Headers('Authorization') accessToken: string, @Query('videoId') videoId: string) {}

  @Get('/data/:sheetId')
  @ApiOperation({ summary: '특정 악보 데이터 가져오기', description: '특정 악보 데이터를 가져옵니다' })
  @ApiCreatedResponse({ description: '특정 악보에 대한 데이터입니다.', type: GetSheetDataResponse })
  async getSheetData(@Headers('Authorization') accessToken: string, @Param('sheetId') sheetId: string) {}

  @Get()
  @ApiOperation({ summary: '특정 유저에 대한 모든 악보 정보 가져오기', description: '모든 악보 정보를 가져옵니다' })
  @ApiCreatedResponse({ description: '모든 악보에 대한 데이터입니다.', type: GetConditionSheetResponse })
  async getAllSheet(@Headers('Authorization') accessToken: string) {
    console.log('asdfasdf');
  }

  @Get()
  async getSheetByVideoId(@Headers('Authorization') accessToken: string, @Query('videoId') videoId: string) {}

  @Get()
  @ApiOperation({
    summary: '특정 조건에 대한 모든 악보 정보',
    description: '특정 조건에 만족하는 모든 악보정보를 가져옵니다. query string 이 존재하지 않을 시에 특정 유저가 소유하고 있는 모든 악보 정보를 반환합니다.',
  })
  @ApiQuery({
    name: 'videoId',
    type: String,
    description: '특정 비디오에 대한 악보를 가져올 경우 사용합니다. [Optional]',
    required: false,
  })
  @ApiCreatedResponse({ description: '특정 조건에 대한 악보 데이터 입니다.', type: GetConditionSheetResponse })
  async getSheetByUserId(@Headers('Authorization') accessToken: string) {}

  @Get('/:sheetId')
  @ApiOperation({ summary: '특정 악보 정보 가져오기', description: '특정 악보 정보를 가져옵니다. 추후에 수정될 예정입니다.' })
  @ApiCreatedResponse({ description: '특정 조건에 맞는 악보 정보 데이터 입니다.', type: GetSheetResponse })
  async getSheet(@Param('sheetId') sheetId: string, @Headers('Authorization') accessToken: string) {}

  @Delete('/:sheetId')
  @ApiOperation({ summary: '특정 악보 정보 삭제하기', description: '특정 악보 정보를 삭제합니다. 악보 정보와 관련된 데이터도 같이 삭제합니다.' })
  @ApiCreatedResponse({ description: '삭제된 악보 데이터 정보입니다.', type: DeleteSheetResponse })
  async deleteSheet(@Param('sheetId') sheetId: string) {}

  @Patch('/:sheetId')
  @ApiOperation({ summary: '특정 악보 정보 수정하기', description: '특정 악보 정보를 수정합니다.' })
  @ApiCreatedResponse({ description: '악보 정보 수정 응답 데이터입니다.', type: PatchSheetResponse })
  async updateSheet(@Headers('Authorization') accessToken: string, @Body() updateSheetRequest: PatchSheetRequest) {}

  @Post()
  @ApiOperation({ summary: '특정 악보 정보 생성하기', description: '특정 유저가 만든 악보 정보를 생성합니다.' })
  @ApiCreatedResponse({ description: '악보 생성 응답 데이터입니다.', type: PostSheetResponse })
  async createSheet(@Headers('Authorization') accessToken: string, @Body() createSheetRequest: PostSheetRequest) {}

  @Post('ai')
  @UsePipes(new AISheetPipe())
  @ApiOperation({ summary: '인공지능 악보 생성하기', description: '인공지능 악보 생성 요청을 보냅니다.' })
  @ApiCreatedResponse({
    description: '현재 악보 생성 진행상황을 반환합니다. \n Status 는 총 4단계로 나뉩니다.',
    type: PostAISheetResponse,
  })
  async createAISheet(@Headers('Authorization') accessToken: string, @Body() createAiSheetRequest: PostAISheetRequest, @Res() res: Response) {
    await this.sheetService.createAISheet(createAiSheetRequest, res);
  }
}
