import { Test, TestingModule } from '@nestjs/testing';
import { SqsService } from './sqs.service';
import { ConfigModule} from '@nestjs/config';
import {InferenceSQSProvider} from "./sqs.provider";
import configuration from "./configuration"
import { Logger } from '@nestjs/common';

describe('SqsService', () => {
  let service: SqsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
        isGlobal: true,
        load: [configuration]})
      ],
      providers: [SqsService,  ...InferenceSQSProvider],
    }).compile();

    service = module.get<SqsService>(SqsService);
  });

  it('Sqs message send test',async () => {
    expect(service).toBeDefined;
    await service.sendCreateSheetMessage({
      status: 0,
      videoId: "asdfasdfsaf"
    })
  });
});
