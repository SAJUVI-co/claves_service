import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EpsService } from './eps.service';
import { CreateEpDto } from './dto/create-ep.dto';
import { UpdateEpDto } from './dto/update-ep.dto';

@Controller()
export class EpsController {
  constructor(private readonly epsService: EpsService) {}

  @MessagePattern('createEp')
  create(@Payload() createEpDto: CreateEpDto) {
    return this.epsService.create(createEpDto);
  }

  @MessagePattern('findAllEps')
  findAll() {
    return this.epsService.findAll();
  }

  @MessagePattern('findOneEp')
  findOne(@Payload() id: number) {
    return this.epsService.findOne(id);
  }

  @MessagePattern('updateEp')
  update(@Payload() updateEpDto: UpdateEpDto) {
    return this.epsService.update(updateEpDto.id, updateEpDto);
  }

  @MessagePattern('removeEp')
  remove(@Payload() id: number) {
    return this.epsService.remove(id);
  }
}
