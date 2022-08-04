import { ApiProperty } from '@nestjs/swagger';
import { Video } from 'src/schemas/video.schema';
import { Response } from '../response';

export class GetWatchHistoryResponse extends Response {
  @ApiProperty({ description: '최근 들은 곡의 목록입니다', type: [Video] })
  data: Video[];
}
