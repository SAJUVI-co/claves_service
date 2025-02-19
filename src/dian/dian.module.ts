import { Module } from '@nestjs/common';
import { DianService } from './dian.service';
import { DianController } from './dian.controller';

@Module({
  controllers: [DianController],
  providers: [DianService],
})
export class DianModule {}
