import { ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';
import { Video } from 'aws-sdk/clients/rekognition';

export class GetGradeVideoCollectionResponse extends Response {
  @ApiProperty()
  data: Video[];
}
