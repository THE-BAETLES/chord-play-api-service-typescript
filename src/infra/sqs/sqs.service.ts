import { AddPermissionCommand, SendMessageCommand, SQSClient } from '@aws-sdk/client-sqs';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { PostCreateAISheetRequest } from 'src/types/api/request/PostCreateAISheet.request';

@Injectable()
export class SqsService {
    constructor(@Inject('INFERENCE_SQS_CLIENT') private client: SQSClient ) {}
    async sendCreateSheetMessage(message: PostCreateAISheetRequest) {
        const {videoId} = message;
        const command = await new SendMessageCommand({
            QueueUrl: (await this.client.config.endpoint()).path,
            MessageBody: videoId,
            MessageGroupId: "CreateSheetMessage",
            MessageDeduplicationId: videoId,
            MessageSystemAttributes: {
            }
        });
        await this.client.send(command);
    }
}
