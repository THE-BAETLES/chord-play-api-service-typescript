import { Type } from '@nestjs/common';
import { ApiProduces, ApiProperty } from '@nestjs/swagger';
import { Gender, PerformerGrade } from 'src/schemas/user.schema';
import { Video } from 'src/schemas/video.schema';
export class PostUserRequest {
  @ApiProperty({})
  country: String;
  @ApiProperty({ description: 'beginner | intermediate | expert' })
  performer_grade: PerformerGrade;
  @ApiProperty({ type: [Video] })
  signup_favorite: [Video];
  @ApiProperty({})
  nickname: String;
  @ApiProperty({ description: 'male | female' })
  gender: Gender;
}
