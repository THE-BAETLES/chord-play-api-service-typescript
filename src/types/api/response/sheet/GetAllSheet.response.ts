import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/schemas/sheet.schema';
import { Response } from '../response';

export class GetAllSheetResponse extends Response {
  code: number;
  message: string;
  @ApiProperty({ description: '모든 악보 정보를 가져옵니다', type: [Sheet] })
  data: Sheet[];
}
