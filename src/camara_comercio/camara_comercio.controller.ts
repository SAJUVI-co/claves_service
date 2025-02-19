import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CamaraComercioService } from './camara_comercio.service';
import { CreateCamaraComercioDto } from './dto/create-camara_comercio.dto';
import { UpdateCamaraComercioDto } from './dto/update-camara_comercio.dto';

@Controller()
export class CamaraComercioController {
  constructor(private readonly camaraComercioService: CamaraComercioService) {}

  @MessagePattern('createCamaraComercio')
  create(@Payload() createCamaraComercioDto: CreateCamaraComercioDto) {
    return this.camaraComercioService.create(createCamaraComercioDto);
  }

  @MessagePattern('findAllCamaraComercio')
  findAll() {
    return this.camaraComercioService.findAll();
  }

  @MessagePattern('findOneCamaraComercio')
  findOne(@Payload() id: number) {
    return this.camaraComercioService.findOne(id);
  }

  @MessagePattern('updateCamaraComercio')
  update(@Payload() updateCamaraComercioDto: UpdateCamaraComercioDto) {
    return this.camaraComercioService.update(updateCamaraComercioDto.id, updateCamaraComercioDto);
  }

  @MessagePattern('removeCamaraComercio')
  remove(@Payload() id: number) {
    return this.camaraComercioService.remove(id);
  }
}
