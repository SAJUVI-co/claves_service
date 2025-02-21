import { Module } from '@nestjs/common';
import { PaginaCuidadService } from './pagina_cuidad.service';
import { PaginaCuidadController } from './pagina_cuidad.controller';

@Module({
  controllers: [PaginaCuidadController],
  providers: [PaginaCuidadService],
})
export class PaginaCuidadModule {}
