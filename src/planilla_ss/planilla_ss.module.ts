import { Module } from '@nestjs/common';
import { PlanillaSsService } from './planilla_ss.service';
import { PlanillaSsController } from './planilla_ss.controller';

@Module({
  controllers: [PlanillaSsController],
  providers: [PlanillaSsService],
})
export class PlanillaSsModule {}
