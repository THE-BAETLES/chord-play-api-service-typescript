import { ApiProperty } from '@nestjs/swagger';
import { Video } from 'src/schemas/video.schema';

export class GetWatchHistoryResponse {
  @ApiProperty({ description: '곡의 개수입니다.' })
  number: number;
  @ApiProperty({ description: '최근 들은 곡의 목록입니다', type: [Video] })
  watch_history_list: Video[];
}
