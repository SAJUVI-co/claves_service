import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ContadorPublicoService } from './contador_publico.service';
import { CreateContadorPublicoDto } from './dto/create-contador_publico.dto';
import { UpdateContadorPublicoDto } from './dto/update-contador_publico.dto';

@Controller()
export class ContadorPublicoController {
  constructor(private readonly contadorPublicoService: ContadorPublicoService) {}

  @MessagePattern('createContadorPublico')
  create(@Payload() createContadorPublicoDto: CreateContadorPublicoDto) {
    return this.contadorPublicoService.create(createContadorPublicoDto);
  }

  @MessagePattern('findAllContadorPublico')
  findAll() {
    return this.contadorPublicoService.findAll();
  }

  @MessagePattern('findOneContadorPublico')
  findOne(@Payload() id: number) {
    return this.contadorPublicoService.findOne(id);
  }

  @MessagePattern('updateContadorPublico')
  update(@Payload() updateContadorPublicoDto: UpdateContadorPublicoDto) {
    return this.contadorPublicoService.update(updateContadorPublicoDto.id, updateContadorPublicoDto);
  }

  @MessagePattern('removeContadorPublico')
  remove(@Payload() id: number) {
    return this.contadorPublicoService.remove(id);
  }
}
