import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/schemas/sheet.schema';
import { Response } from '../response';

export class GetConditionSheetResponse extends Response {
  code: number;
  message: string;
  @ApiProperty({ description: '특정 조건에 대한 악보 정보입니다', type: [Sheet] })
  data: Sheet[];
}
