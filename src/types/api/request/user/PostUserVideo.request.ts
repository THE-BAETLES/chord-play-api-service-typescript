import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Video } from 'src/schemas/video.schema';

@Schema()
export class PostUserVideoRequest {
  @ApiProperty()
  video_id: string;
}
