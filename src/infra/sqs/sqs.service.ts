import { AddPermissionCommand, SendMessageCommand, SQSClient } from '@aws-sdk/client-sqs';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { SheetCreateMessage } from 'src/message/SheetCreateMessage';
import { INFERENCE_SQS_CLIENT } from './sqs.provider';
export const CREATE_SHEET_MESSAGE_GROUP_ID = 'CreateSheetMessage';
@Injectable()
export class SqsService {
  constructor(@Inject(INFERENCE_SQS_CLIENT) private client: SQSClient) {}
  async sendCreateSheetMessage(message: SheetCreateMessage) {
    const { videoId } = message;
    const command = await new SendMessageCommand({
      QueueUrl: (await this.client.config.endpoint()).path,
      MessageBody: videoId,
      MessageGroupId: CREATE_SHEET_MESSAGE_GROUP_ID,
      MessageDeduplicationId: `${videoId}`,
      MessageSystemAttributes: {},
    });
    Logger.log('send!');
    await this.client.send(command);
  }
}
