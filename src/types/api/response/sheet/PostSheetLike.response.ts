import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/schemas/sheet.schema';
import { Response } from '../response';

@Schema()
export class PostSheetLikeResponse extends Response {
  @ApiProperty({})
  data: string;
}
