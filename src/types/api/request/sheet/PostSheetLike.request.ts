import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class PostSheetLikeRequest {
  @ApiProperty({})
  sheet_id: string;
}
