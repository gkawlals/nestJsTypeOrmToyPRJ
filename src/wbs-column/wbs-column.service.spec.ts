import { Test, TestingModule } from '@nestjs/testing';
import { WbsColumnService } from './wbs-column.service';

describe('WbsColumnService', () => {
  let service: WbsColumnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WbsColumnService],
    }).compile();

    service = module.get<WbsColumnService>(WbsColumnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
