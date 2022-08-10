import { Type } from '@nestjs/common';
import { ApiProduces, ApiProperty } from '@nestjs/swagger';
import { Gender, PerformerGrade } from 'src/schemas/user.schema';
export class PostUserRequest {
  @ApiProperty({})
  country: String;
  @ApiProperty({ description: 'beginner | intermediate | expert' })
  performer_grade: PerformerGrade;
  @ApiProperty({ type: [String] })
  signup_favorite: [string];
  @ApiProperty({})
  nickname: String;
  @ApiProperty({ description: 'male | female' })
  gender: Gender;
}
