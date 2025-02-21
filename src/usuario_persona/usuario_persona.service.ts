import { Injectable } from '@nestjs/common';
import { CreateUsuarioPersonaDto } from './dto/create-usuario_persona.dto';
import { UpdateUsuarioPersonaDto } from './dto/update-usuario_persona.dto';

@Injectable()
export class UsuarioPersonaService {
  create(createUsuarioPersonaDto: CreateUsuarioPersonaDto) {
    return 'This action adds a new usuarioPersona';
  }

  findAll() {
    return `This action returns all usuarioPersona`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuarioPersona`;
  }

  update(id: number, updateUsuarioPersonaDto: UpdateUsuarioPersonaDto) {
    return `This action updates a #${id} usuarioPersona`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuarioPersona`;
  }
}
