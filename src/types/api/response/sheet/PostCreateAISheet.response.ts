import { ApiProperty } from '@nestjs/swagger';
import { SheetDocument } from 'src/schemas/sheet.schema';
import { SheetDataDocument } from 'src/schemas/sheetData.schema';

export class PostCreateAISheetResponse {
  @ApiProperty({ description: '현재 Progress 상태' })
  status!: number;
}
