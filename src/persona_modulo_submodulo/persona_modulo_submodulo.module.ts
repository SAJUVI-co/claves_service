import { Module } from '@nestjs/common';
import { PersonaModuloSubmoduloService } from './persona_modulo_submodulo.service';
import { PersonaModuloSubmoduloController } from './persona_modulo_submodulo.controller';

@Module({
  controllers: [PersonaModuloSubmoduloController],
  providers: [PersonaModuloSubmoduloService],
})
export class PersonaModuloSubmoduloModule {}
