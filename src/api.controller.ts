import { Body, Controller, Get, Header, Headers, Logger, Param, Post, Query, Req, Res, UsePipes } from '@nestjs/common';
import { HistoryService } from './domain/history/history.service';
import { RecommendationService } from './domain/recommendation/recommendation.service';
import { UserService } from './domain/user/user.service';
import { PostSignUpResponse } from './types/api/response/PostSignUp.response';
import { Response } from 'express';
import { SheetService } from './domain/sheet/sheet.service';
import { PostCreateAISheetRequest } from './types/api/request/PostCreateAISheet.request';
import { AISheetPipe } from 'src/validation/aisheet.pipe';
@Controller('v1') 
export class ApiController {
  constructor(private recommendationService: RecommendationService,
     private userService: UserService,
     private historyService: HistoryService,
     private sheetService: SheetService
     ) {}

  @Post('signup')
  async signUp(): Promise<PostSignUpResponse>{
    return {
      status: 'FAILED',
      payload: 'EXCEPTION'
    }
  }

  @Post('aisheet')
  @UsePipes(new AISheetPipe())
  async createAISheet(@Body() createSheetRequest: PostCreateAISheetRequest, @Res() res: Response) {
    await this.sheetService.createAISheet(createSheetRequest, res);
  }

  @Get('watch-history')
  async watchHistory(@Headers('Authorization') accessToken: string ,@Query('offset') offset: number, @Query('limit') limit: number) {
    const user_id = await this.userService.getUserId(accessToken);
    return this.historyService.findSubset(user_id, offset, limit)
  }

  @Get('recommendation')
  async recommendation(@Headers('Authorization') accessToken: string, @Query('offset') offset: number, @Query('limit') limit: number): Promise<any> {
    const user_id = await this.userService.getUserId(accessToken);
    const recommendationResults = await this.recommendationService.getRecommendation(user_id, offset, limit);
    return recommendationResults;
  }

}
