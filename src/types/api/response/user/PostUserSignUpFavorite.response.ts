import { Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';

@Schema()
export class PostUserFavoriteVideoResponse extends Response {}
