import { Type } from '@nestjs/common';
import { ApiProduces, ApiProperty } from '@nestjs/swagger';
import { PerformerGrade } from 'src/schemas/user.schema';
export class PostUserRequest {
  @ApiProperty({ description: 'male | female' })
  performer_grade: PerformerGrade;
  @ApiProperty({ type: [String] })
  signup_favorite: [string];
}
