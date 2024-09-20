import { Test, TestingModule } from '@nestjs/testing';
import { WbsValueController } from './wbs-value.controller';

describe('WbsValueController', () => {
  let controller: WbsValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WbsValueController],
    }).compile();

    controller = module.get<WbsValueController>(WbsValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
