import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Video } from 'src/schemas/video.schema';
import { Response } from '../response';

@Schema()
export class GetSearchVideoCollectionResponse extends Response {
  @ApiProperty({})
  data: Video[];
}
