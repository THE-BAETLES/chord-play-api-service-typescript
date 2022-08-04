import { ApiProperty } from '@nestjs/swagger';

export class PostCreateAISheetRequest {
  @ApiProperty({ description: '유튜브 비디오 ID' })
  videoId!: string;
  @ApiProperty({ description: '현재 Progress 상태' })
  status!: number;
}
