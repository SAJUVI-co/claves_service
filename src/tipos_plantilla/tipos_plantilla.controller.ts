import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TiposPlantillaService } from './tipos_plantilla.service';
import { CreateTiposPlantillaDto } from './dto/create-tipos_plantilla.dto';
import { UpdateTiposPlantillaDto } from './dto/update-tipos_plantilla.dto';

@Controller()
export class TiposPlantillaController {
  constructor(private readonly tiposPlantillaService: TiposPlantillaService) {}

  @MessagePattern('createTiposPlantilla')
  create(@Payload() createTiposPlantillaDto: CreateTiposPlantillaDto) {
    return this.tiposPlantillaService.create(createTiposPlantillaDto);
  }

  @MessagePattern('findAllTiposPlantilla')
  findAll() {
    return this.tiposPlantillaService.findAll();
  }

  @MessagePattern('findOneTiposPlantilla')
  findOne(@Payload() id: number) {
    return this.tiposPlantillaService.findOne(id);
  }

  @MessagePattern('updateTiposPlantilla')
  update(@Payload() updateTiposPlantillaDto: UpdateTiposPlantillaDto) {
    return this.tiposPlantillaService.update(updateTiposPlantillaDto.id, updateTiposPlantillaDto);
  }

  @MessagePattern('removeTiposPlantilla')
  remove(@Payload() id: number) {
    return this.tiposPlantillaService.remove(id);
  }
}
