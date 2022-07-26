import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetRecommendationResponse } from 'src/types/api/response/GetRecommendation.response';
import { RecommendationConfigType } from 'src/configs/recommendation.config';
import { VideoDocument } from 'src/schemas/video.schema';
import { VideoService } from '../video/video.service';
@Injectable()
export class RecommendationService {
    constructor(private httpService: HttpService,
         private config: ConfigService,
         private videoService: VideoService){
    }

    async getRecommendation(user_id: string, offset: number, limit: number): Promise<VideoDocument[]> {
        Logger.log("Recommendation Start!!");
        const {endpoint, port} = this.config.get<RecommendationConfigType>('recommendation');
        const response: GetRecommendationResponse = (await this.httpService.axiosRef.get(`http://${endpoint}:${port}/recommendation/${user_id}`, {
            params: {
                offset: offset,
                limit: limit
            }
        })).data;
        const recommendationList = response.payload.recommendation_list;
        return this.videoService.findById(recommendationList);
    }
}
