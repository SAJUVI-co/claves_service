import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CorreosService } from './correos.service';
import { CreateCorreoDto } from './dto/create-correo.dto';
import { UpdateCorreoDto } from './dto/update-correo.dto';

@Controller()
export class CorreosController {
  constructor(private readonly correosService: CorreosService) {}

  @MessagePattern('createCorreo')
  create(@Payload() createCorreoDto: CreateCorreoDto) {
    return this.correosService.create(createCorreoDto);
  }

  @MessagePattern('findAllCorreos')
  findAll() {
    return this.correosService.findAll();
  }

  @MessagePattern('findOneCorreo')
  findOne(@Payload() id: number) {
    return this.correosService.findOne(id);
  }

  @MessagePattern('updateCorreo')
  update(@Payload() updateCorreoDto: UpdateCorreoDto) {
    return this.correosService.update(updateCorreoDto.id, updateCorreoDto);
  }

  @MessagePattern('removeCorreo')
  remove(@Payload() id: number) {
    return this.correosService.remove(id);
  }
}
