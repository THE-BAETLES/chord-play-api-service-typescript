import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetRecommendationRequest } from 'src/types/api/request/GetRecommendation.request';
import { GetRecommendationResponse } from 'src/types/api/response/GetRecommendation.response';

@Injectable()
export class RecommendationService {
    constructor(private httpService: HttpService, private config: ConfigService){
    }

    async getRecommendation(recommendationRequest: GetRecommendationRequest): Promise<GetRecommendationResponse> {
        this.httpService.axiosRef.get("")
        return {
            payload: {
                
            }
        }
    }
}
