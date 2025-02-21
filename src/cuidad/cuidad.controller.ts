import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CuidadService } from './cuidad.service';
import { CreateCuidadDto } from './dto/create-cuidad.dto';
import { UpdateCuidadDto } from './dto/update-cuidad.dto';

@Controller()
export class CuidadController {
  constructor(private readonly paginaCuidadService: CuidadService) {}

  @MessagePattern('createCuidad')
  create(@Payload() createCuidadDto: CreateCuidadDto) {
    return this.paginaCuidadService.create(createCuidadDto);
  }

  @MessagePattern('findAllCuidad')
  findAll() {
    return this.paginaCuidadService.findAll();
  }

  @MessagePattern('findOneCuidad')
  findOne(@Payload() id: number) {
    return this.paginaCuidadService.findOne(id);
  }

  @MessagePattern('updateCuidad')
  update(@Payload() updateCuidadDto: UpdateCuidadDto) {
    return this.paginaCuidadService.update(updateCuidadDto.id, updateCuidadDto);
  }

  @MessagePattern('removeCuidad')
  remove(@Payload() id: number) {
    return this.paginaCuidadService.remove(id);
  }
}
