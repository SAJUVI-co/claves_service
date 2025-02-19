import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlanillaSsService } from './planilla_ss.service';
import { CreatePlanillaSsDto } from './dto/create-planilla_ss.dto';
import { UpdatePlanillaSsDto } from './dto/update-planilla_ss.dto';

@Controller()
export class PlanillaSsController {
  constructor(private readonly planillaSsService: PlanillaSsService) {}

  @MessagePattern('createPlanillaSs')
  create(@Payload() createPlanillaSsDto: CreatePlanillaSsDto) {
    return this.planillaSsService.create(createPlanillaSsDto);
  }

  @MessagePattern('findAllPlanillaSs')
  findAll() {
    return this.planillaSsService.findAll();
  }

  @MessagePattern('findOnePlanillaSs')
  findOne(@Payload() id: number) {
    return this.planillaSsService.findOne(id);
  }

  @MessagePattern('updatePlanillaSs')
  update(@Payload() updatePlanillaSsDto: UpdatePlanillaSsDto) {
    return this.planillaSsService.update(updatePlanillaSsDto.id, updatePlanillaSsDto);
  }

  @MessagePattern('removePlanillaSs')
  remove(@Payload() id: number) {
    return this.planillaSsService.remove(id);
  }
}
