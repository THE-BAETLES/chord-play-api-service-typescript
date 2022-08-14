import { Type } from '@nestjs/common';
import { ApiProduces, ApiProperty } from '@nestjs/swagger';
import { Gender, PerformerGrade } from 'src/schemas/user.schema';
import { Video } from 'src/schemas/video.schema';
export class PostUserSignUpFavoriteRequest {
  @ApiProperty({ type: [Video], description: '유저가 회원가입 시에 선택한 곡 목록입니다.' })
  signup_favorite: [Video];
}
