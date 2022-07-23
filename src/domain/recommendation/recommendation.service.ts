import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { GetRecommendationRequest } from 'src/types/api/request/GetRecommendation.request';
import { GetRecommendationResponse } from 'src/types/api/response/GetRecommendation.response';

@Injectable()
export class RecommendationService {
    constructor(private httpService: HttpService){
    }

    async getRecommendation(): Promise<GetRecommendationResponse> {
        return {
            payload: {
                
            }
        }
    }
}
