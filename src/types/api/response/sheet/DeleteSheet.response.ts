import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/schemas/sheet.schema';
import { Response } from '../response';

export class DeleteSheetResponse extends Response {
  @ApiProperty({ description: '삭제된 악보 정보를 가져옵니다' })
  data: Sheet;
}
