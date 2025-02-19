import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ContableService } from './contable.service';
import { CreateContableDto } from './dto/create-contable.dto';
import { UpdateContableDto } from './dto/update-contable.dto';

@Controller()
export class ContableController {
  constructor(private readonly contableService: ContableService) {}

  @MessagePattern('createContable')
  create(@Payload() createContableDto: CreateContableDto) {
    return this.contableService.create(createContableDto);
  }

  @MessagePattern('findAllContable')
  findAll() {
    return this.contableService.findAll();
  }

  @MessagePattern('findOneContable')
  findOne(@Payload() id: number) {
    return this.contableService.findOne(id);
  }

  @MessagePattern('updateContable')
  update(@Payload() updateContableDto: UpdateContableDto) {
    return this.contableService.update(updateContableDto.id, updateContableDto);
  }

  @MessagePattern('removeContable')
  remove(@Payload() id: number) {
    return this.contableService.remove(id);
  }
}
