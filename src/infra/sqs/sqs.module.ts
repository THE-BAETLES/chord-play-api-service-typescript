import { Module } from '@nestjs/common';
import { SqsService } from './sqs.service';
import { InferenceSQSProvider } from './sqs.provider';
@Module({
    providers: [SqsService, ...InferenceSQSProvider],
    exports: [SqsService, ...InferenceSQSProvider]
})
export class SqsModule {}
