import { ApiProperty } from '@nestjs/swagger';
import { Video } from 'src/schemas/video.schema';
import { Response } from '../response';

export class PostVideoResponse extends Response {
  @ApiProperty({ type: Video, description: '생성한 비디오 아이디입니다.' })
  data: Video;
}
