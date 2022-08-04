import { Controller, Get, Head, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { WatchHistoryService } from './watch_history.service';
import { Headers } from '@nestjs/common';

@Controller('v1/watch-history')
@ApiTags('영상 재생 히스토리 API')
export class WatchHistoryController {
  constructor(private watchHistory: WatchHistoryService) {}

  @Get()
  @ApiOperation({
    summary: '특정 유저에 대한 영상 재생 히스토리 목록 가져오기',
    description: '특정 유저에 대한 영상 재생 히스토리 목록을 가져옵니다  [offset, offset+limit -1] 범위의 데이터를 가져옵니다',
  })
  @ApiCreatedResponse({ description: '영상 재생 히스토리 데이터입니다' })
  async getWatchHistory(@Headers('Authorization') accessToken: string, @Query('offset') offset, @Query('limit') limit) {}
}
