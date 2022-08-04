import { ApiProperty } from '@nestjs/swagger';

export class ChordInfo {
  @ApiProperty({})
  chord: string;
  @ApiProperty({})
  start: number;
  @ApiProperty({})
  end: number;
  @ApiProperty({})
  position: number;
}
