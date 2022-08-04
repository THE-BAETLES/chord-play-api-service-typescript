import { Date, Document, PromiseProvider } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type WatchHistoryDocument = WatchHistory & Document;

@Schema()
export class WatchHistory {
  @Prop({ required: true })
  @ApiProperty({ description: '재생 히스토리 id 입니다.' })
  _id: string;

  @Prop({ type: String, ref: 'User' })
  @ApiProperty({ description: '악보 영상을 재생한 유저의 id 입니다.' })
  user_id: string;

  @Prop({ type: String, ref: 'Video' })
  @ApiProperty({ description: '악보 영상의 유튜브 비디오 id 입니다.' })
  video_id: string;

  @Prop({ type: Date, required: true })
  @ApiProperty({ description: '특정 유저가 악보를 마지막으로 재생한 날짜입니다.' })
  last_played: Date;

  @Prop({ type: Number })
  @ApiProperty({ description: '특정 유저가 특정 악보를 재생한 횟수입니다.' })
  play_count: number;
}

export const WatchHistorySchema = SchemaFactory.createForClass(WatchHistory);
