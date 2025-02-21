import { Module } from '@nestjs/common';
import { UsuarioPersonaService } from './usuario_persona.service';
import { UsuarioPersonaController } from './usuario_persona.controller';

@Module({
  controllers: [UsuarioPersonaController],
  providers: [UsuarioPersonaService],
})
export class UsuarioPersonaModule {}
