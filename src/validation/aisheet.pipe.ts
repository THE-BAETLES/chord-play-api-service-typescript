import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { PostCreateAISheetRequest } from 'src/types/api/request/sheet/PostCreateAISheet.request';

@Injectable()
export class AISheetPipe implements PipeTransform<PostCreateAISheetRequest, PostCreateAISheetRequest> {
  transform(value: PostCreateAISheetRequest, metadata: ArgumentMetadata): PostCreateAISheetRequest {
    return {
      videoId: value.videoId,
      status: Number(value.status),
    };
  }
}
