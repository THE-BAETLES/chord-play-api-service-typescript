import { SheetDataDocument } from 'src/schemas/sheetData.schema';
import { SheetDocument } from 'src/schemas/sheet.schema';
import { ApiProperty } from '@nestjs/swagger';
export class PostCreateSheetRequest {
  @ApiProperty({ description: '디지털 악보 데이터' })
  sheetData: SheetDataDocument;
  sheet: SheetDocument;
}
