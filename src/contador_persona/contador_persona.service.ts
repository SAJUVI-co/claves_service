import { Injectable } from '@nestjs/common';
import { CreateContadorPersonaDto } from './dto/create-contador_persona.dto';
import { UpdateContadorPersonaDto } from './dto/update-contador_persona.dto';

@Injectable()
export class ContadorPersonaService {
  create(createContadorPersonaDto: CreateContadorPersonaDto) {
    return 'This action adds a new contadorPersona';
  }

  findAll() {
    return `This action returns all contadorPersona`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contadorPersona`;
  }

  update(id: number, updateContadorPersonaDto: UpdateContadorPersonaDto) {
    return `This action updates a #${id} contadorPersona`;
  }

  remove(id: number) {
    return `This action removes a #${id} contadorPersona`;
  }
}
