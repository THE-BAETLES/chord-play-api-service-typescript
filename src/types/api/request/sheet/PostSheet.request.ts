import { SheetData, SheetDataDocument } from 'src/schemas/sheetData.schema';
import { Sheet, SheetDocument } from 'src/schemas/sheet.schema';
import { ApiProperty, PickType } from '@nestjs/swagger';
export class PostSheetRequest {
  @ApiProperty({ description: '디지털 악보 데이터', type: SheetData })
  sheetData: SheetData;
  @ApiProperty({ description: '생성된 디지털 악보 데이터 정보', type: PickType(Sheet, ['video_id', 'title']) })
  sheet: Pick<Sheet, 'video_id' | 'title'>;
}
