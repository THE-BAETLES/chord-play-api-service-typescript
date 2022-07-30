import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { VideoDocument } from 'src/schemas/video.schema';

@Injectable()
export class VideoService {
  constructor(@Inject('VIDEO_MODEL') private videoModel: Model<VideoDocument>) {}

  async create() {}

  async findAll(): Promise<VideoDocument[]> {
    return this.videoModel.find().exec();
  }

  async findById(idList: string[]): Promise<VideoDocument[]> {
    return this.videoModel.find().where('_id').in(idList).exec();
  }
}
