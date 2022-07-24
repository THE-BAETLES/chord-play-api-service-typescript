import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetRecommendationRequest } from 'src/types/api/request/GetRecommendation.request';
import { GetRecommendationResponse } from 'src/types/api/response/GetRecommendation.response';
import { RecommendationConfigType } from 'src/configs/recommendation.config';
@Injectable()
export class RecommendationService {
    constructor(private httpService: HttpService, private config: ConfigService){
    }

    async getRecommendation(recommendationRequest: GetRecommendationRequest): Promise<GetRecommendationResponse> {
        const {
            endpoint,
            port
        } = this.config.get<RecommendationConfigType>('recommendation');

        const userId = recommendationRequest.params.user_id
        const number = recommendationRequest.query.number;

        const response = (await this.httpService.axiosRef.get(`${endpoint}:${port}/recommendation/${userId}?number=${number}`));
        return response.data;
    }
}
