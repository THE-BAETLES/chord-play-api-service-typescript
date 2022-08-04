import { ApiProperty } from '@nestjs/swagger';
import { Video } from 'src/schemas/video.schema';

export class GetRecommendationVideoResponse {
  @ApiProperty({ description: '곡의 개수입니다.' })
  number: number;
  @ApiProperty({ description: '추천 서비스를 통해 얻은 곡 목록입니다.', type: [Video] })
  recommendation_list: Video[];
}
