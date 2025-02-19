import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ModulosService } from './modulos.service';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';

@Controller()
export class ModulosController {
  constructor(private readonly modulosService: ModulosService) {}

  @MessagePattern('createModulo')
  create(@Payload() createModuloDto: CreateModuloDto) {
    return this.modulosService.create(createModuloDto);
  }

  @MessagePattern('findAllModulos')
  findAll() {
    return this.modulosService.findAll();
  }

  @MessagePattern('findOneModulo')
  findOne(@Payload() id: number) {
    return this.modulosService.findOne(id);
  }

  @MessagePattern('updateModulo')
  update(@Payload() updateModuloDto: UpdateModuloDto) {
    return this.modulosService.update(updateModuloDto.id, updateModuloDto);
  }

  @MessagePattern('removeModulo')
  remove(@Payload() id: number) {
    return this.modulosService.remove(id);
  }
}
