import { Module } from '@nestjs/common';
import { PersonaRepresentanteService } from './persona_representante.service';
import { PersonaRepresentanteController } from './persona_representante.controller';

@Module({
  controllers: [PersonaRepresentanteController],
  providers: [PersonaRepresentanteService],
})
export class PersonaRepresentanteModule {}
