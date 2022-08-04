import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { PostAISheetRequest } from 'src/types/api/request/sheet/PostAISheet.request';

@Injectable()
export class AISheetPipe implements PipeTransform<PostAISheetRequest, PostAISheetRequest> {
  transform(value: PostAISheetRequest, metadata: ArgumentMetadata): PostAISheetRequest {
    return {
      videoId: value.videoId,
      status: Number(value.status),
    };
  }
}
