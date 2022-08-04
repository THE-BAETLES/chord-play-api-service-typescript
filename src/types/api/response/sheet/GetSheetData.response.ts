import { ApiProperty } from '@nestjs/swagger';
import { SheetData } from 'src/schemas/sheetData.schema';
import { Response } from '../response';

export class GetSheetDataResponse extends Response {
  code: number;
  message: string;
  @ApiProperty({ description: '특정 악보에 대한 데이터 정보' })
  data: SheetData;
}
