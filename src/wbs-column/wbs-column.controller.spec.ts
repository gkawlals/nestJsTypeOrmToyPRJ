import { Test, TestingModule } from '@nestjs/testing';
import { WbsColumnController } from './wbs-column.controller';

describe('WbsColumnController', () => {
  let controller: WbsColumnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WbsColumnController],
    }).compile();

    controller = module.get<WbsColumnController>(WbsColumnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
