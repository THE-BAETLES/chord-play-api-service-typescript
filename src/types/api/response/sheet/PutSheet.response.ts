import { ApiProperty } from '@nestjs/swagger';
import { SheetDocument } from 'src/schemas/sheet.schema';

export class PutSheetResponse {
  @ApiProperty({ description: '디지털 악보 데이터 수정 요청 응답' })
  sheet: SheetDocument;
}
