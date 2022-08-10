import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class SheetLikeSchema {
  @Prop({ type: String, required: true })
  @ApiProperty({})
  _id: string;

  @Prop({ type: String })
  @ApiProperty({})
  user_id: string;

  @Prop({ type: String })
  @ApiProperty({})
  sheet_id: string;

  @ApiProperty({})
  date: Date;
}
