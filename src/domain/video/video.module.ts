import { Module } from '@nestjs/common';
import { MongoModule } from 'src/database/mongo/mongo.module';
import { VideoProvider } from './video.provider';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';

@Module({
  imports: [MongoModule],
  providers: [VideoService, ...VideoProvider],
  exports: [VideoService, ...VideoProvider],
  controllers: [VideoController],
})
export class VideoModule {}
