import { Injectable } from '@nestjs/common';
import { CreatePlanillaSsDto } from './dto/create-planilla_ss.dto';
import { UpdatePlanillaSsDto } from './dto/update-planilla_ss.dto';

@Injectable()
export class PlanillaSsService {
  create(createPlanillaSsDto: CreatePlanillaSsDto) {
    return 'This action adds a new planillaSs';
  }

  findAll() {
    return `This action returns all planillaSs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planillaSs`;
  }

  update(id: number, updatePlanillaSsDto: UpdatePlanillaSsDto) {
    return `This action updates a #${id} planillaSs`;
  }

  remove(id: number) {
    return `This action removes a #${id} planillaSs`;
  }
}
