import { ApiProperty } from '@nestjs/swagger';

export class GetRecommendationVideoRequest {
  query: {
    offset: number;
    limit: number;
  };
}
