import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RecommendationService } from './recommendation.service';
import { Headers } from '@nestjs/common';

@Controller('v1/recommendation')
export class RecommendationController {
  constructor(private userService: UserService, private recommendation: RecommendationService) {}

  @Get()
  async getRecommendation(@Headers('Authorization') accessToken: string, @Query('offset') offset: number, @Query('limit') limit: number): Promise<any> {
    return 0;
  }
}
