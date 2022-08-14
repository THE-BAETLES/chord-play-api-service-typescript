import { Body, Controller, Delete, Get, Header, Headers, Logger, Param, Post, Query, Req, Res, UsePipes } from '@nestjs/common';
import { WatchHistoryService } from './domain/history/watch_history.service';
import { RecommendationService } from './domain/recommendation/recommendation.service';
import { UserService } from './domain/user/user.service';
import { SheetService } from './domain/sheet/sheet.service';
@Controller('v1')
export class ApiController {
  constructor(
    private recommendationService: RecommendationService,
    private userService: UserService,
    private historyService: WatchHistoryService,
    private sheetService: SheetService,
  ) {}
}
