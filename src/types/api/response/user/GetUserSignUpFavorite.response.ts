import { ApiProperty } from '@nestjs/swagger';
import { Video } from 'src/schemas/video.schema';
import { Response } from '../response';

export class GetUserSignUpFavoriteResponse extends Response {
  @ApiProperty({ type: [Video] })
  data: [Video];
}
