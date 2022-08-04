import { SheetData, SheetDataDocument } from 'src/schemas/sheetData.schema';
import { Sheet, SheetDocument } from 'src/schemas/sheet.schema';
import { ApiProperty } from '@nestjs/swagger';
export class PostCreateSheetRequest {
  @ApiProperty({ description: '디지털 악보 데이터', type: Sheet })
  sheetData: SheetData;
  @ApiProperty({})
  sheet: Sheet;
}
