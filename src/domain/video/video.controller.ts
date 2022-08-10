import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('v1/videos')
@ApiTags('비디오 API')
export class VideoController {
  constructor() {}

  @Get('/preference')
  async getPreferenceVideoByLevel(@Query('level') level: string) {}
}
