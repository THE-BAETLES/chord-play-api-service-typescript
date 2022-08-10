import { ApiProperty } from '@nestjs/swagger';
import { Video } from 'src/schemas/video.schema';
import { Response } from '../response';

export class GetUserVideoCollectionResponse extends Response {
  @ApiProperty({})
  data: Video[];
}
