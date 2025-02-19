import { Module } from '@nestjs/common';
import { TipoEntidadService } from './tipo_entidad.service';
import { TipoEntidadController } from './tipo_entidad.controller';

@Module({
  controllers: [TipoEntidadController],
  providers: [TipoEntidadService],
})
export class TipoEntidadModule {}
