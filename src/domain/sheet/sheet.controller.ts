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
import { PostSheetDataResponse } from 'src/types/api/response/sheet/PostSheetData.response';
import { PostSheetDataRequest } from 'src/types/api/request/sheet/PostSheetData.request';

@Controller('v1/sheets')
export class SheetController {
  constructor(@Inject('TEST_DECO') Test, private sheetService: SheetService, private userService: UserService) {}

  @ApiTags('악보 MY API')
  @Get('/my')
  @ApiOperation({ summary: '내가 만든 악보 목록', description: '내 악보 목록을 가져옵니다.' })
  @ApiCreatedResponse()
  async getMySheet(@Headers('Authorization') accessToken: string, @Query('videoId') videoId: string) {}

  @ApiTags('악보 좋아요 API')
  @Get('/like')
  @ApiOperation({ summary: '좋아요한 악보 목록', description: '좋아요한 악보 목록을 가져옵니다.' })
  @ApiCreatedResponse({ description: '좋아요 악보 데이터입니다.', type: GetSheetLikeResponse })
  async getLikeSheet(@Headers('Authorization') accessToken: string, @Query('videoId') videoId: string) {}

  @ApiTags('악보 좋아요 API')
  @Post('/like')
  @ApiOperation({ summary: '좋아요 악보 추가', description: '좋아요한 악보를 추가합니다.' })
  @ApiCreatedResponse({ type: PostSheetLikeResponse })
  async createLikeSheet(@Headers('Authorization') accessToken: string, @Body() createLikeSheetBody: PostSheetLikeRequest) {}

  @ApiTags('악보 좋아요 API')
  @Delete('/like/:sheetId')
  @ApiOperation({ summary: '좋아요 악보 삭제', description: '좋아요한 악보를 삭제합니다.' })
  @ApiCreatedResponse({ type: PostSheetLikeResponse })
  async deleteLikeSheet(@Headers('Authorization') accessToken: string, @Param('sheetId') sheetId: string) {}

  @ApiTags('악보 공유 API')
  @Get('/shared')
  @ApiOperation({ summary: '공유된 악보 목록', description: '공유된 악보 목록을 가져옵니다.' })
  @ApiCreatedResponse()
  async getSharedSheetData(@Headers('Authorization') accessToken: string, @Query('videoId') videoId: string) {}

  @ApiTags('악보 데이터 API')
  @Get('/:sheetId/data')
  @ApiOperation({ summary: '특정 악보 데이터 가져오기', description: '특정 악보 데이터를 가져옵니다' })
  @ApiCreatedResponse({ description: '특정 악보에 대한 데이터입니다.', type: GetSheetDataResponse })
  async getSheetData(@Headers('Authorization') accessToken: string, @Param('sheetId') sheetId: string) {}

  @ApiTags('악보 정보 API')
  @Post('')
  @ApiOperation({ summary: '악보 데이터 생성', description: '특정 악보 데이터를 생성합니다.' })
  @ApiCreatedResponse({ description: '', type: PostSheetDataResponse })
  async createSheetData(@Headers('Authorization') accessToken: string, @Body() PostSheetDataRequest) {}

  @ApiTags('악보 정보 API')
  @Get()
  @ApiOperation({
    summary: '특정 조건에 대한 모든 악보 정보',
    description: '특정 조건에 만족하는 모든 악보정보를 가져옵니다. query string 이 존재하지 않을 시에 특정 유저가 소유하고 있는 모든 악보 정보를 반환합니다.',
  })
  @ApiCreatedResponse({ description: '특정 조건에 대한 악보 데이터 입니다.', type: GetConditionSheetResponse })
  async getSheetByUserId(@Headers('Authorization') accessToken: string) {}

  @ApiTags('악보 정보 API')
  @Delete('/:sheetId')
  @ApiOperation({ summary: '특정 악보 정보 삭제하기', description: '특정 악보 정보를 삭제합니다. 악보 정보와 관련된 데이터도 같이 삭제합니다.' })
  @ApiCreatedResponse({ description: '삭제된 악보 데이터 정보입니다.', type: DeleteSheetResponse })
  async deleteSheet(@Param('sheetId') sheetId: string) {}

  @ApiTags('악보 정보 API')
  @Patch('/:sheetId')
  @ApiOperation({ summary: '특정 악보 정보 수정하기', description: '특정 악보 정보를 수정합니다.' })
  @ApiCreatedResponse({ description: '악보 정보 수정 응답 데이터입니다.', type: PatchSheetResponse })
  async updateSheet(@Headers('Authorization') accessToken: string, @Body() updateSheetRequest: PatchSheetRequest) {}

  @ApiTags('인공지능 악보 API')
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
