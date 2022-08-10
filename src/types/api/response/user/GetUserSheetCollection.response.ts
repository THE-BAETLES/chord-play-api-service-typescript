import { ApiProperty } from '@nestjs/swagger';
import { Sheet } from 'src/schemas/sheet.schema';
import { Video } from 'src/schemas/video.schema';
import { Response } from '../response';

export class GetUserSheetCollectionResponse extends Response {
  @ApiProperty({})
  data: Sheet[];
}
