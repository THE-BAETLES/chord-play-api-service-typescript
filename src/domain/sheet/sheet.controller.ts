import { Body, Controller, Delete, Get, Param, Post, Res, UsePipes, Headers, Logger, Inject, Put, Header } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AISheetPipe } from 'src/validation/aisheet.pipe';
import { UserService } from '../user/user.service';
import { SheetService } from './sheet.service';
import { Response } from 'express';
import { GetSheetDataResponse } from 'src/types/api/response/sheet/GetSheetData.response';
import { GetAllSheetResponse } from 'src/types/api/response/sheet/GetAllSheet.response';
import { GetSheetResponse } from 'src/types/api/response/sheet/GetSheet.response';
import { DeleteSheetResponse } from 'src/types/api/response/sheet/DeleteSheet.response';
import { PatchSheetResponse } from 'src/types/api/response/sheet/PatchSheet.response';
import { PatchSheetRequest } from 'src/types/api/request/sheet/PatchSheet.request';
import { PostAISheetResponse } from 'src/types/api/response/sheet/PostAISheet.response';
import { PostSheetResponse } from 'src/types/api/response/sheet/PostSheet.response';
import { PostSheetRequest } from 'src/types/api/request/sheet/PostSheet.request';
import { PostAISheetRequest } from 'src/types/api/request/sheet/PostAISheet.request';

@Controller('v1/sheets')
@ApiTags('악보 API')
export class SheetController {
  constructor(@Inject('TEST_DECO') Test, private sheetService: SheetService, private userService: UserService) {}

  @Get('/data/:sheetId')
  @ApiOperation({ summary: '특정 악보 데이터 가져오기', description: '특정 악보 데이터를 가져옵니다' })
  @ApiCreatedResponse({ description: '특정 악보에 대한 데이터입니다.', type: GetSheetDataResponse })
  async getSheetData(@Headers('Authorization') accessToken: string, @Param('sheetId') sheetId: string) {}

  @Get()
  @ApiOperation({ summary: '모든 악보 정보 가져오기', description: '모든 악보 정보를 가져옵니다' })
  @ApiCreatedResponse({ description: '모든 악보에 대한 데이터입니다.', type: GetAllSheetResponse })
  async getAllSheet(@Headers('Authorization') accessToken: string) {
    console.log('asdfasdf');
  }

  @Get('/:sheetId')
  @ApiOperation({ summary: '특정 악보 정보 가져오기', description: '특정 악보 정보를 가져옵니다. 추후에 수정될 예정입니다.' })
  @ApiCreatedResponse({ description: '특정 조건에 맞는 악보 정보 데이터 입니다.', type: GetSheetResponse })
  async getSheet(@Param('sheetId') sheetId: string, @Headers('Authorization') accessToken: string) {}

  @Delete('/:sheetId')
  @ApiOperation({ summary: '특정 악보 정보 삭제하기', description: '특정 악보 정보를 삭제합니다. 악보 정보와 관련된 데이터도 같이 삭제합니다.' })
  @ApiCreatedResponse({ description: '삭제된 악보 데이터 정보입니다.', type: DeleteSheetResponse })
  async deleteSheet(@Param('sheetId') sheetId: string) {}

  @Put('/:sheetId')
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

const multiParam = <T extends { [key: string]: string }>(dict: T): ParameterDecorator => {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number): void => {
    return;
  };
};

const paramConverter = <T extends { [key: string]: string }>(dict: T): ParameterDecorator[] => {
  const ret = [];

  for (let i in dict) {
  }

  return [];
};
