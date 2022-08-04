import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export type SheetDocument = Sheet & Document;

@Schema()
export class Sheet {
  @ApiProperty({ description: '악보 정보의 id 입니다. SHEET 테이블의 id 값과 동일합니다.' })
  _id: string;

  @Prop()
  @ApiProperty({ description: '악보에 사용하는 비디오 id 입니다.' })
  video_id: string;

  @Prop()
  @ApiProperty({ description: '악보를 생성한 유저 id 입니다.' })
  user_id: string;

  @Prop()
  @ApiProperty({ description: '악보 타이틀 입니다.' })
  title: string;

  @Prop()
  @ApiProperty({ description: '악보 생성시간 입니다.' })
  created_at: Date;

  @Prop()
  @ApiProperty({ description: '악보 업데이트시간 입니다.' })
  updated_at: Date;

  @Prop()
  @ApiProperty({ description: '악보 좋아요 개수입니다.' })
  like_count: number;
}

export const SheetSchema = SchemaFactory.createForClass(Sheet);
