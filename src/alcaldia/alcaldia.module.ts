import { Module } from '@nestjs/common';
import { AlcaldiaService } from './alcaldia.service';
import { AlcaldiaController } from './alcaldia.controller';

@Module({
  controllers: [AlcaldiaController],
  providers: [AlcaldiaService],
})
export class AlcaldiaModule {}
