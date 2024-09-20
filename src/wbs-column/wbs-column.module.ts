import { Module } from '@nestjs/common';
import { WbsColumnController } from './wbs-column.controller';
import { WbsColumnService } from './wbs-column.service';

@Module({
  controllers: [WbsColumnController],
  providers: [WbsColumnService]
})
export class WbsColumnModule {}
