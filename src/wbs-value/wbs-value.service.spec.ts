import { Test, TestingModule } from '@nestjs/testing';
import { WbsValueService } from './wbs-value.service';

describe('WbsValueService', () => {
  let service: WbsValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WbsValueService],
    }).compile();

    service = module.get<WbsValueService>(WbsValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
