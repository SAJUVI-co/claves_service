import { Module } from '@nestjs/common';
import { ContadorPersonaService } from './contador_persona.service';
import { ContadorPersonaController } from './contador_persona.controller';

@Module({
  controllers: [ContadorPersonaController],
  providers: [ContadorPersonaService],
})
export class ContadorPersonaModule {}
