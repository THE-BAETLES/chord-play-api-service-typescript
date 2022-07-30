import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}
  async getUserId(accessToken: string) {
    return 'test';
  }
}
