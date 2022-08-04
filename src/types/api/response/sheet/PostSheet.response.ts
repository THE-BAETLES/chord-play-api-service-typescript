import { SheetData, SheetDataDocument } from 'src/schemas/sheetData.schema';
import { SheetDocument } from 'src/schemas/sheet.schema';
import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';

export class PostSheetResponse extends Response {
  code: number;
  message: string;
  @ApiProperty({ description: '디지털 악보 데이터 응답' })
  data: SheetData;
}
