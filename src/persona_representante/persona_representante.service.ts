import { Injectable } from '@nestjs/common';
import { CreatePersonaRepresentanteDto } from './dto/create-persona_representante.dto';
import { UpdatePersonaRepresentanteDto } from './dto/update-persona_representante.dto';

@Injectable()
export class PersonaRepresentanteService {
  create(createPersonaRepresentanteDto: CreatePersonaRepresentanteDto) {
    return 'This action adds a new personaRepresentante';
  }

  findAll() {
    return `This action returns all personaRepresentante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personaRepresentante`;
  }

  update(id: number, updatePersonaRepresentanteDto: UpdatePersonaRepresentanteDto) {
    return `This action updates a #${id} personaRepresentante`;
  }

  remove(id: number) {
    return `This action removes a #${id} personaRepresentante`;
  }
}
