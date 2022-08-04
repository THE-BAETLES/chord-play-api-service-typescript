import { ApiProperty } from '@nestjs/swagger';
import { SheetDocument } from 'src/schemas/sheet.schema';
import { SheetDataDocument } from 'src/schemas/sheetData.schema';
import { Response } from '../response';

export class PostAISheetResponse extends Response {
  code: number;
  message: string;
  @ApiProperty({ description: '현재 Progress 상태' })
  data: number;
}
