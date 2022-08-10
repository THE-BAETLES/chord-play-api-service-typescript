import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class PostUserVideoCollectionRequest {
  @ApiProperty({ type: String, description: '비디오 id' })
  video_id: string;
}
