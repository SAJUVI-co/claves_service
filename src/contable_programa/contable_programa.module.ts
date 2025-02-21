import { Module } from '@nestjs/common';
import { ContableProgramaService } from './contable_programa.service';
import { ContableProgramaController } from './contable_programa.controller';

@Module({
  controllers: [ContableProgramaController],
  providers: [ContableProgramaService],
})
export class ContableProgramaModule {}
