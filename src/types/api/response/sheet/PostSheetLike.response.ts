import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/schemas/sheet.schema';

@Schema()
export class PostSheetLike extends Response {
  @ApiProperty({})
  data: Sheet;
}
