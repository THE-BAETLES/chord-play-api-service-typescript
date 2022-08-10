import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export const MALE = 'male' as const;
export const FEMALE = 'female';
export const BEGINNER = 'beginner';
export const INTERMEDIATE = 'intermediate';
export const EXPERT = 'expert';

export type Gender = typeof MALE | typeof FEMALE;
export type PerformerGrade = typeof BEGINNER | typeof INTERMEDIATE | typeof EXPERT;
export type test = {
  [k in Gender]: string;
};

@Schema()
export class User {
  @Prop({ type: String, required: true })
  @ApiProperty()
  _id: ObjectId;

  @Prop({ type: String })
  @ApiProperty()
  nickname: string;

  @Prop({ type: String })
  @ApiProperty()
  firebase_uid: string;

  @Prop({ type: String })
  @ApiProperty()
  country: string;

  @Prop({ type: String })
  @ApiProperty()
  language: string;

  @Prop({ type: String, enum: [MALE, FEMALE] })
  @ApiProperty({ description: '유저의 성별 정보입니다. male | female 값만 허용됩니다.' })
  gender: Gender;

  @Prop({ type: String })
  @ApiProperty()
  level: string;

  @Prop({ type: String, enum: [BEGINNER, INTERMEDIATE, EXPERT] })
  @ApiProperty({ description: '유저의 performance 정보입니다. beginner | intermediate | expert 값만 허용됩니다.' })
  performer_grade: PerformerGrade;

  @Prop({ type: String })
  @ApiProperty()
  membership: string;

  @Prop({ type: [String] })
  @ApiProperty()
  signup_favorite: string[];

  @Prop({ type: [String] })
  @ApiProperty()
  my_collection: string[];
}
