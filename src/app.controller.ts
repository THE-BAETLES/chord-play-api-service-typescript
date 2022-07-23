import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PostSignUpResponse } from './types/api/response/PostSignUp.response';

@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('signup')
  async signUp(): Promise<PostSignUpResponse>{
    return {
      status: 'FAILED',
      payload: 'EXCEPTION'
    }
  }

  @Get('recommendation')
  async recommendation(@Param('user_id') user_id: string, @Query('number') number: string): Promise<any> {
    
  }

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
}
