import { ApiProperty } from '@nestjs/swagger';
import { Sheet, SheetDocument } from 'src/schemas/sheet.schema';
import { Response } from '../response';

export class PatchSheetResponse extends Response {
  code: number;
  message: string;
  @ApiProperty({ description: '디지털 악보 데이터 수정 요청 응답' })
  data: Sheet;
}
