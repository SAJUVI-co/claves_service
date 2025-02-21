import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsuarioPersonaService } from './usuario_persona.service';
import { CreateUsuarioPersonaDto } from './dto/create-usuario_persona.dto';
import { UpdateUsuarioPersonaDto } from './dto/update-usuario_persona.dto';

@Controller()
export class UsuarioPersonaController {
  constructor(private readonly usuarioPersonaService: UsuarioPersonaService) {}

  @MessagePattern('createUsuarioPersona')
  create(@Payload() createUsuarioPersonaDto: CreateUsuarioPersonaDto) {
    return this.usuarioPersonaService.create(createUsuarioPersonaDto);
  }

  @MessagePattern('findAllUsuarioPersona')
  findAll() {
    return this.usuarioPersonaService.findAll();
  }

  @MessagePattern('findOneUsuarioPersona')
  findOne(@Payload() id: number) {
    return this.usuarioPersonaService.findOne(id);
  }

  @MessagePattern('updateUsuarioPersona')
  update(@Payload() updateUsuarioPersonaDto: UpdateUsuarioPersonaDto) {
    return this.usuarioPersonaService.update(updateUsuarioPersonaDto.id, updateUsuarioPersonaDto);
  }

  @MessagePattern('removeUsuarioPersona')
  remove(@Payload() id: number) {
    return this.usuarioPersonaService.remove(id);
  }
}
