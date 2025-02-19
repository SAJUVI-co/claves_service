import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaginaCuidadService } from './pagina_cuidad.service';
import { CreatePaginaCuidadDto } from './dto/create-pagina_cuidad.dto';
import { UpdatePaginaCuidadDto } from './dto/update-pagina_cuidad.dto';

@Controller()
export class PaginaCuidadController {
  constructor(private readonly paginaCuidadService: PaginaCuidadService) {}

  @MessagePattern('createPaginaCuidad')
  create(@Payload() createPaginaCuidadDto: CreatePaginaCuidadDto) {
    return this.paginaCuidadService.create(createPaginaCuidadDto);
  }

  @MessagePattern('findAllPaginaCuidad')
  findAll() {
    return this.paginaCuidadService.findAll();
  }

  @MessagePattern('findOnePaginaCuidad')
  findOne(@Payload() id: number) {
    return this.paginaCuidadService.findOne(id);
  }

  @MessagePattern('updatePaginaCuidad')
  update(@Payload() updatePaginaCuidadDto: UpdatePaginaCuidadDto) {
    return this.paginaCuidadService.update(updatePaginaCuidadDto.id, updatePaginaCuidadDto);
  }

  @MessagePattern('removePaginaCuidad')
  remove(@Payload() id: number) {
    return this.paginaCuidadService.remove(id);
  }
}
