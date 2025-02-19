import { Module } from '@nestjs/common';
import { AfpService } from './afp.service';
import { AfpController } from './afp.controller';

@Module({
  controllers: [AfpController],
  providers: [AfpService],
})
export class AfpModule {}
