import { Module } from '@nestjs/common';
import { ArlService } from './arl.service';
import { ArlController } from './arl.controller';

@Module({
  controllers: [ArlController],
  providers: [ArlService],
})
export class ArlModule {}
