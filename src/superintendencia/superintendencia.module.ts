import { Module } from '@nestjs/common';
import { SuperintendenciaService } from './superintendencia.service';
import { SuperintendenciaController } from './superintendencia.controller';

@Module({
  controllers: [SuperintendenciaController],
  providers: [SuperintendenciaService],
})
export class SuperintendenciaModule {}
