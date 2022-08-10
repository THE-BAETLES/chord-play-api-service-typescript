import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/schemas/user.schema';
import { Response } from '../response';

export class PostUserResponse extends Response {
  @ApiProperty({})
  data: User;
}
