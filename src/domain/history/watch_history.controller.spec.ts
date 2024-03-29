import { Test, TestingModule } from '@nestjs/testing';
import { WatchHistoryController } from './watch_history.controller';

describe('HistoryController', () => {
  let controller: WatchHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatchHistoryController],
    }).compile();

    controller = module.get<WatchHistoryController>(WatchHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
