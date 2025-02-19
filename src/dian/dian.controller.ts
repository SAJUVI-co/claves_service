import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DianService } from './dian.service';
import { CreateDianDto } from './dto/create-dian.dto';
import { UpdateDianDto } from './dto/update-dian.dto';

@Controller()
export class DianController {
  constructor(private readonly dianService: DianService) {}

  @MessagePattern('createDian')
  create(@Payload() createDianDto: CreateDianDto) {
    return this.dianService.create(createDianDto);
  }

  @MessagePattern('findAllDian')
  findAll() {
    return this.dianService.findAll();
  }

  @MessagePattern('findOneDian')
  findOne(@Payload() id: number) {
    return this.dianService.findOne(id);
  }

  @MessagePattern('updateDian')
  update(@Payload() updateDianDto: UpdateDianDto) {
    return this.dianService.update(updateDianDto.id, updateDianDto);
  }

  @MessagePattern('removeDian')
  remove(@Payload() id: number) {
    return this.dianService.remove(id);
  }
}
