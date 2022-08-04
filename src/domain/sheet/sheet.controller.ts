import { Body, Controller, Delete, Get, Param, Post, Res, UsePipes, Headers } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostCreateAISheetRequest } from 'src/types/api/request/PostCreateAISheet.request';
import { AISheetPipe } from 'src/validation/aisheet.pipe';
import { UserService } from '../user/user.service';
import { SheetService } from './sheet.service';
import { Response } from 'express';
import { PostCreateAISheetResponse } from 'src/types/api/response/PostCreateAISheet.response';

@Controller('v1/sheets')
@ApiTags('악보 API')
export class SheetController {
  constructor(private sheetService: SheetService, private userService: UserService) {}

  @Get('/data/:sheetId')
  @ApiOperation({ summary: '특정 악보 데이터 가져오기', description: '특정 악보 데이터를 가져옵니다' })
  @ApiCreatedResponse({})
  async getSheetData() {}

  @Get()
  @ApiOperation({ summary: '모든 악보 정보 가져오기', description: '모든 악보 정보를 가져옵니다' })
  @ApiCreatedResponse({})
  async getAllSheet() {}

  @Get('/:sheetId')
  @ApiOperation({ summary: '특정 악보 정보 가져오기', description: '특정 악보 정보를 가져옵니다.' })
  @ApiCreatedResponse({})
  async getSheet(@Param('sheetId') sheetId: string, @Headers('Authorization') accessToken: string) {}

  @Delete('/:sheetId')
  @ApiOperation({ summary: '특정 악보 정보 삭제하기', description: '특정 악보 정보를 삭제합니다. 악보 정보와 관련된 데이터도 같이 삭제합니다.' })
  @ApiCreatedResponse({})
  async deleteSheet() {}

  @Post()
  @ApiOperation({ summary: '특정 악보 정보 생성하기', description: '특정 유저가 만든 악보 정보를 생성합니다.' })
  @ApiCreatedResponse({})
  async createSheet() {}

  @Post('/sheets/ai')
  @UsePipes(new AISheetPipe())
  @ApiOperation({ summary: '인공지능 악보 생성하기', description: '인공지능 악보 생성 요청을 보냅니다.' })
  @ApiCreatedResponse({
    description: '현재 악보 생성 진행상황을 반환합니다. \n Status 는 총 4단계로 나뉩니다.',
    type: PostCreateAISheetResponse,
  })
  async createAISheet(@Body() createSheetRequest: PostCreateAISheetRequest, @Res() res: Response) {
    await this.sheetService.createAISheet(createSheetRequest, res);
  }
}
