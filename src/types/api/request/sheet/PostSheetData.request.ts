import { ApiProperty, PickType } from '@nestjs/swagger';
import { Schema } from '@nestjs/mongoose';
import { Sheet } from 'src/schemas/sheet.schema';
import { SheetData } from 'src/schemas/sheetData.schema';

export class PostSheetDataRequest {
  @ApiProperty({ description: '생성된 디지털 악보 데이터 정보', type: PickType(Sheet, ['video_id', 'title']) })
  sheet: Pick<Sheet, 'video_id' | 'title'>;

  @ApiProperty({ description: '악보 생성 데이터입니다.' })
  sheet_data: SheetData;
}
