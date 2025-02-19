import { Module } from '@nestjs/common';
import { ContableService } from './contable.service';
import { ContableController } from './contable.controller';

@Module({
  controllers: [ContableController],
  providers: [ContableService],
})
export class ContableModule {}
