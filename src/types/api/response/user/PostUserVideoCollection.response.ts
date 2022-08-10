import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';

@Schema()
export class PostUserVideoCollectionResponse extends Response {
  @ApiProperty({ type: String, description: '비디오 ID' })
  data: string;
}
