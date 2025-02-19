import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ContadorPersonaService } from './contador_persona.service';
import { CreateContadorPersonaDto } from './dto/create-contador_persona.dto';
import { UpdateContadorPersonaDto } from './dto/update-contador_persona.dto';

@Controller()
export class ContadorPersonaController {
  constructor(private readonly contadorPersonaService: ContadorPersonaService) {}

  @MessagePattern('createContadorPersona')
  create(@Payload() createContadorPersonaDto: CreateContadorPersonaDto) {
    return this.contadorPersonaService.create(createContadorPersonaDto);
  }

  @MessagePattern('findAllContadorPersona')
  findAll() {
    return this.contadorPersonaService.findAll();
  }

  @MessagePattern('findOneContadorPersona')
  findOne(@Payload() id: number) {
    return this.contadorPersonaService.findOne(id);
  }

  @MessagePattern('updateContadorPersona')
  update(@Payload() updateContadorPersonaDto: UpdateContadorPersonaDto) {
    return this.contadorPersonaService.update(updateContadorPersonaDto.id, updateContadorPersonaDto);
  }

  @MessagePattern('removeContadorPersona')
  remove(@Payload() id: number) {
    return this.contadorPersonaService.remove(id);
  }
}
