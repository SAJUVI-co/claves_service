import { Module } from '@nestjs/common';
import { ClavesService } from './claves.service';
import { ClavesController } from './claves.controller';

@Module({
  controllers: [ClavesController],
  providers: [ClavesService],
})
export class ClavesModule {}
