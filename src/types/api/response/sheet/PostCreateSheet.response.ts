import { SheetData, SheetDataDocument } from 'src/schemas/sheetData.schema';
import { SheetDocument } from 'src/schemas/sheet.schema';
import { ApiProperty } from '@nestjs/swagger';
export class PostCreateSheetResponse {
  @ApiProperty({ description: '디지털 악보 데이터 응답' })
  sheet_data: SheetData;
}
