import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class PostSheetLikeRequest {
  @ApiProperty({})
  sheet_id: string;
}
