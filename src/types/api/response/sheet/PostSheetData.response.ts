import { ApiProduces, ApiProperty } from '@nestjs/swagger';
import { Response } from '../response';

export class PostSheetDataResponse extends Response {
  @ApiProperty({ description: '악보 생성 데이터 Sheet ID 입니다.', type: String })
  data: string;
}
