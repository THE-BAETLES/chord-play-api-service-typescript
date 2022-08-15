import { ApiProperty } from '@nestjs/swagger';
import { Video } from 'src/schemas/video.schema';

export class PostVideoRequest {
  @ApiProperty({ type: Video, description: '비디오 생성에 필요한 스키마 정보입니다' })
  video: Video;
}
