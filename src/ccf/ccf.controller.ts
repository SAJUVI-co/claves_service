import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CcfService } from './ccf.service';
import { CreateCcfDto } from './dto/create-ccf.dto';
import { UpdateCcfDto } from './dto/update-ccf.dto';

@Controller()
export class CcfController {
  constructor(private readonly ccfService: CcfService) {}

  @MessagePattern('createCcf')
  create(@Payload() createCcfDto: CreateCcfDto) {
    return this.ccfService.create(createCcfDto);
  }

  @MessagePattern('findAllCcf')
  findAll() {
    return this.ccfService.findAll();
  }

  @MessagePattern('findOneCcf')
  findOne(@Payload() id: number) {
    return this.ccfService.findOne(id);
  }

  @MessagePattern('updateCcf')
  update(@Payload() updateCcfDto: UpdateCcfDto) {
    return this.ccfService.update(updateCcfDto.id, updateCcfDto);
  }

  @MessagePattern('removeCcf')
  remove(@Payload() id: number) {
    return this.ccfService.remove(id);
  }
}
