import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
export type VideoDocument = Video & Document;

@Schema()
export class Video {
  @Prop({ type: String, required: true })
  @ApiProperty({ description: '특정 비디오의 id 입니다. 유튜브 비디오 id 와 동일합니다' })
  _id: string;

  @ApiProperty({ description: '특정 비디오의 썸네일 경로입니다.' })
  thumbnail_path: string;

  @ApiProperty({ description: '특정 비디오의 제목입니다' })
  title: string;

  @Prop()
  @ApiProperty({ description: '특정 비디오의 장르입니다' })
  genre: string;

  @Prop()
  @ApiProperty({ description: '특정 비디오의 artist 입니다' })
  singer: string;

  @Prop()
  @ApiProperty({ description: '특정 비디오의 태그입니다', type: [String] })
  tags: string[];

  @Prop()
  @ApiProperty({ description: '특정 비디오의 재생 길이 입니다.' })
  length: number;

  @Prop()
  @ApiProperty({ description: '특정 비디오의 난이도 입니다.' })
  difficulty_avg: number;

  @Prop()
  @ApiProperty({ description: '특정 비디오에 연관된 악보의 개수입니다' })
  sheet_conut: number;

  @Prop()
  @ApiProperty({ description: '비디오가 재생된 총 횟수를 기록합니다.' })
  play_count: number;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
