import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClavesService } from './claves.service';
import { CreateClaveDto } from './dto/create-clave.dto';
import { UpdateClaveDto } from './dto/update-clave.dto';

@Controller()
export class ClavesController {
  constructor(private readonly clavesService: ClavesService) {}

  @MessagePattern('createClave')
  create(@Payload() createClaveDto: CreateClaveDto) {
    return this.clavesService.create(createClaveDto);
  }

  @MessagePattern('findAllClaves')
  findAll() {
    return this.clavesService.findAll();
  }

  @MessagePattern('findOneClave')
  findOne(@Payload() id: number) {
    return this.clavesService.findOne(id);
  }

  @MessagePattern('updateClave')
  update(@Payload() updateClaveDto: UpdateClaveDto) {
    return this.clavesService.update(updateClaveDto.id, updateClaveDto);
  }

  @MessagePattern('removeClave')
  remove(@Payload() id: number) {
    return this.clavesService.remove(id);
  }
}
