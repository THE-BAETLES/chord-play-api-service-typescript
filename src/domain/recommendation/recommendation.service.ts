import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetRecommendationRequest } from 'src/types/api/request/GetRecommendation.request';
import { GetRecommendationResponse } from 'src/types/api/response/GetRecommendation.response';
import { RecommendationConfigType } from 'src/configs/recommendation.config';
import { HistoryService } from '../history/history.service';
import { VideoDocument } from 'src/schemas/video.schema';
import { VideoService } from '../video/video.service';
@Injectable()
export class RecommendationService {
    constructor(private httpService: HttpService,
         private config: ConfigService,
         private videoService: VideoService){
    }

    async getRecommendation(user_id: string, offset: number, limit: number): Promise<VideoDocument[]> {
        const {endpoint, port} = this.config.get<RecommendationConfigType>('recommendation');
        const response: GetRecommendationResponse = (await this.httpService.axiosRef.get(`${endpoint}:${port}/recommendation/${user_id}`, {
            params: {
                offset: offset,
                limit: limit
            }
        })).data;

        const recommendationList = response.payload.recommendation_list;
        return this.videoService.findById(recommendationList);
    }
}
