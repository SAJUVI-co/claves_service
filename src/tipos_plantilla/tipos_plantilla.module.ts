import { Module } from '@nestjs/common';
import { TiposPlantillaService } from './tipos_plantilla.service';
import { TiposPlantillaController } from './tipos_plantilla.controller';

@Module({
  controllers: [TiposPlantillaController],
  providers: [TiposPlantillaService],
})
export class TiposPlantillaModule {}
