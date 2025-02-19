import { Module } from '@nestjs/common';
import { ContadorPublicoService } from './contador_publico.service';
import { ContadorPublicoController } from './contador_publico.controller';

@Module({
  controllers: [ContadorPublicoController],
  providers: [ContadorPublicoService],
})
export class ContadorPublicoModule {}
