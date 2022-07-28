import { SQSClient } from "@aws-sdk/client-sqs";
import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AwsConfigType } from "src/configs/aws.config";
import { InferenceQueueConfigType } from "src/configs/inferenceQueue.config";

export const INFERENCE_SQS_CLIENT = 'INFERENCE_SQS_CLIENT';
export const InferenceSQSProvider = [{
    provide: INFERENCE_SQS_CLIENT,
    useFactory: async (config: ConfigService): Promise<SQSClient> => {
        const aws = config.get<AwsConfigType>('aws');
        const inferenceQueue = config.get<InferenceQueueConfigType>('inferenceQueue');
        return await new SQSClient({
            region: aws.region,
            endpoint: inferenceQueue.url,
            credentials: {
                accessKeyId: aws.accessKeyId,
                secretAccessKey: aws.secretKey
            }
        })
    },
    inject: [ConfigService]
}]