import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SuperintendenciaService } from './superintendencia.service';
import { CreateSuperintendenciaDto } from './dto/create-superintendencia.dto';
import { UpdateSuperintendenciaDto } from './dto/update-superintendencia.dto';

@Controller()
export class SuperintendenciaController {
  constructor(private readonly superintendenciaService: SuperintendenciaService) {}

  @MessagePattern('createSuperintendencia')
  create(@Payload() createSuperintendenciaDto: CreateSuperintendenciaDto) {
    return this.superintendenciaService.create(createSuperintendenciaDto);
  }

  @MessagePattern('findAllSuperintendencia')
  findAll() {
    return this.superintendenciaService.findAll();
  }

  @MessagePattern('findOneSuperintendencia')
  findOne(@Payload() id: number) {
    return this.superintendenciaService.findOne(id);
  }

  @MessagePattern('updateSuperintendencia')
  update(@Payload() updateSuperintendenciaDto: UpdateSuperintendenciaDto) {
    return this.superintendenciaService.update(updateSuperintendenciaDto.id, updateSuperintendenciaDto);
  }

  @MessagePattern('removeSuperintendencia')
  remove(@Payload() id: number) {
    return this.superintendenciaService.remove(id);
  }
}
