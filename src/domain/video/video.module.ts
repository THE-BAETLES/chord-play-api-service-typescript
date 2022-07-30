import { Module } from '@nestjs/common';
import { MongoModule } from 'src/database/mongo/mongo.module';
import { VideoProvider } from './video.provider';
import { VideoService } from './video.service';

@Module({
  imports: [MongoModule],
  providers: [VideoService, ...VideoProvider],
  exports: [VideoService, ...VideoProvider],
})
export class VideoModule {}
