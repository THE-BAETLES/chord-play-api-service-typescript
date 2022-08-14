import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/schemas/sheet.schema';
import { Response } from '../response';

export class GetSheetResponse extends Response {
  code: number;
  message: string;
  @ApiProperty({ type: [Sheet], description: '특정 악보 정보 데이터 입니다.' })
  data: [Sheet];
}
