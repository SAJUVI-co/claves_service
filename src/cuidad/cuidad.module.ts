import { Module } from '@nestjs/common';
import { CuidadService } from './cuidad.service';
import { CuidadController } from './cuidad.controller';

@Module({
  controllers: [CuidadController],
  providers: [CuidadService],
})
export class CuidadModule {}
