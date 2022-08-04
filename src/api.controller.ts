import { Body, Controller, Delete, Get, Header, Headers, Logger, Param, Post, Query, Req, Res, UsePipes } from '@nestjs/common';
import { WatchHistoryService } from './domain/history/watch_history.service';
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
    private historyService: WatchHistoryService,
    private sheetService: SheetService,
  ) {}
}
