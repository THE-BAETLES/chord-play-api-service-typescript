import { ApiProperty } from '@nestjs/swagger';
import { Video } from 'src/schemas/video.schema';
import { Response } from '../response';

export class GetRecommendationVideoResponse extends Response {
  @ApiProperty({ description: '추천 곡 비디오 아이디 목록입니다' })
  data: Video[];
}
