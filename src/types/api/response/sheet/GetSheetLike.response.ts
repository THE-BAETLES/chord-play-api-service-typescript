import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/schemas/sheet.schema';
import { Response } from '../response';

@Schema()
export class GetSheetLikeResponse extends Response {
  @ApiProperty({ type: [Sheet] })
  data: Sheet;
}
