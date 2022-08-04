import { Body, Controller, Delete, Get, Header, Headers, Logger, Param, Post, Query, Req, Res, UsePipes } from '@nestjs/common';
import { HistoryService } from './domain/history/history.service';
import { RecommendationService } from './domain/recommendation/recommendation.service';
import { UserService } from './domain/user/user.service';
import { PostSignUpResponse } from './types/api/response/PostSignUp.response';
import { Response } from 'express';
import { SheetService } from './domain/sheet/sheet.service';
import { AISheetPipe } from 'src/validation/aisheet.pipe';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { PostCreateAISheetRequest } from './types/api/request/sheet/PostCreateAISheet.request';
@Controller('v1')
export class ApiController {
  constructor(
    private recommendationService: RecommendationService,
    private userService: UserService,
    private historyService: HistoryService,
    private sheetService: SheetService,
  ) {}

  @Post('signup')
  async signUp(): Promise<PostSignUpResponse> {
    return {
      status: 'FAILED',
      payload: 'EXCEPTION',
    };
  }
  @Get('/sheets/:sheetId')
  @ApiOperation({})
  @ApiCreatedResponse({})
  async getSheet(@Param('sheetId') sheetId: string, @Headers('Authorization') accessToken: string) {}

  @Post('/sheets/ai')
  @UsePipes(new AISheetPipe())
  async createAISheet(@Body() createSheetRequest: PostCreateAISheetRequest, @Res() res: Response) {
    await this.sheetService.createAISheet(createSheetRequest, res);
  }

  @Get('watch-history')
  async watchHistory(@Headers('Authorization') accessToken: string, @Query('offset') offset: number, @Query('limit') limit: number) {
    const user_id = await this.userService.getUserId(accessToken);
    return this.historyService.findSubset(user_id, offset, limit);
  }

  @Get('recommendation')
  async recommendation(@Headers('Authorization') accessToken: string, @Query('offset') offset: number, @Query('limit') limit: number): Promise<any> {
    const userId = await this.userService.getUserId(accessToken);
    const recommendationResults = await this.recommendationService.getRecommendation(userId, offset, limit);
    return recommendationResults;
  }
}
