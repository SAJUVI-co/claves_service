import { Module } from '@nestjs/common';
import { CamaraComercioService } from './camara_comercio.service';
import { CamaraComercioController } from './camara_comercio.controller';

@Module({
  controllers: [CamaraComercioController],
  providers: [CamaraComercioService],
})
export class CamaraComercioModule {}
