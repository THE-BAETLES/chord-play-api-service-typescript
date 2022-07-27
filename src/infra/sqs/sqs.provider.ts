import { SQSClient } from "@aws-sdk/client-sqs";
import { ConfigService } from "@nestjs/config";
import sqs from "aws-sdk/clients/sqs";
import { AwsConfigType } from "src/configs/aws.config";
import { InferenceQueueConfigType } from "src/configs/inferenceQueue.config";

export const InferenceSQSProvider = [{
    provide: 'INFERENCE_SQS_CLIENT',
    useFactory: async (config: ConfigService): Promise<SQSClient> => {
        const aws = config.get<AwsConfigType>('aws');
        const inferenceQueue = config.get<InferenceQueueConfigType>('inferenceQueue');
        
        return new SQSClient({
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