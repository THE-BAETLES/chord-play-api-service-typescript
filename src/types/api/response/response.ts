import { ApiProperty } from "@nestjs/swagger";

export class Response {
  @ApiProperty({ description: '[0:3] HTTP STATUS [4:8] 타입코드 [9:]구분코드' })
  code: number;
  @ApiProperty({ description: '따로 정의해야하는 메세지' })
  message: string;
}
