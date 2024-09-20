import { Module } from '@nestjs/common';
import { WbsValueController } from './wbs-value.controller';
import { WbsValueService } from './wbs-value.service';

@Module({
  controllers: [WbsValueController],
  providers: [WbsValueService]
})
export class WbsValueModule {}
