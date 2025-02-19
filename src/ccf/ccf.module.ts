import { Module } from '@nestjs/common';
import { CcfService } from './ccf.service';
import { CcfController } from './ccf.controller';

@Module({
  controllers: [CcfController],
  providers: [CcfService],
})
export class CcfModule {}
