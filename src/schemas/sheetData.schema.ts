import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ChordInfo } from 'src/types/api/models/chordinfo.model';
import { Sheet } from './sheet.schema';

export type SheetDataDocument = SheetData & Document;

@Schema()
export class SheetData {
  @Prop({ type: String, required: true })
  @ApiProperty({ description: '악보 정보의 id 입니다. SHEET 테이블의 id 값과 동일합니다.' })
  _id: string;

  @Prop({ type: Number })
  @ApiProperty({ description: '음악의 bpm 정보입니다' })
  bpm: number;

  @Prop()
  @ApiProperty({ description: '코드 정보입니다', type: [ChordInfo] })
  chord_infos: [ChordInfo];
}

export const SheetDataSchema = SchemaFactory.createForClass(SheetData);
