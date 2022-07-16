import { Controller, Get, Post } from '@nestjs/common';
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

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
}
