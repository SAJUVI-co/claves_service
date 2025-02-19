import { Injectable } from '@nestjs/common';
import { CreatePersonaModuloSubmoduloDto } from './dto/create-persona_modulo_submodulo.dto';
import { UpdatePersonaModuloSubmoduloDto } from './dto/update-persona_modulo_submodulo.dto';

@Injectable()
export class PersonaModuloSubmoduloService {
  create(createPersonaModuloSubmoduloDto: CreatePersonaModuloSubmoduloDto) {
    return 'This action adds a new personaModuloSubmodulo';
  }

  findAll() {
    return `This action returns all personaModuloSubmodulo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personaModuloSubmodulo`;
  }

  update(id: number, updatePersonaModuloSubmoduloDto: UpdatePersonaModuloSubmoduloDto) {
    return `This action updates a #${id} personaModuloSubmodulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} personaModuloSubmodulo`;
  }
}
