import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TipoEntidadService } from './tipo_entidad.service';
import { CreateTipoEntidadDto } from './dto/create-tipo_entidad.dto';
import { UpdateTipoEntidadDto } from './dto/update-tipo_entidad.dto';

@Controller()
export class TipoEntidadController {
  constructor(private readonly tipoEntidadService: TipoEntidadService) {}

  @MessagePattern('createTipoEntidad')
  create(@Payload() createTipoEntidadDto: CreateTipoEntidadDto) {
    return this.tipoEntidadService.create(createTipoEntidadDto);
  }

  @MessagePattern('findAllTipoEntidad')
  findAll() {
    return this.tipoEntidadService.findAll();
  }

  @MessagePattern('findOneTipoEntidad')
  findOne(@Payload() id: number) {
    return this.tipoEntidadService.findOne(id);
  }

  @MessagePattern('updateTipoEntidad')
  update(@Payload() updateTipoEntidadDto: UpdateTipoEntidadDto) {
    return this.tipoEntidadService.update(updateTipoEntidadDto.id, updateTipoEntidadDto);
  }

  @MessagePattern('removeTipoEntidad')
  remove(@Payload() id: number) {
    return this.tipoEntidadService.remove(id);
  }
}
