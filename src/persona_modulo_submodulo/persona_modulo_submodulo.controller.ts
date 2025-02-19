import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PersonaModuloSubmoduloService } from './persona_modulo_submodulo.service';
import { CreatePersonaModuloSubmoduloDto } from './dto/create-persona_modulo_submodulo.dto';
import { UpdatePersonaModuloSubmoduloDto } from './dto/update-persona_modulo_submodulo.dto';

@Controller()
export class PersonaModuloSubmoduloController {
  constructor(private readonly personaModuloSubmoduloService: PersonaModuloSubmoduloService) {}

  @MessagePattern('createPersonaModuloSubmodulo')
  create(@Payload() createPersonaModuloSubmoduloDto: CreatePersonaModuloSubmoduloDto) {
    return this.personaModuloSubmoduloService.create(createPersonaModuloSubmoduloDto);
  }

  @MessagePattern('findAllPersonaModuloSubmodulo')
  findAll() {
    return this.personaModuloSubmoduloService.findAll();
  }

  @MessagePattern('findOnePersonaModuloSubmodulo')
  findOne(@Payload() id: number) {
    return this.personaModuloSubmoduloService.findOne(id);
  }

  @MessagePattern('updatePersonaModuloSubmodulo')
  update(@Payload() updatePersonaModuloSubmoduloDto: UpdatePersonaModuloSubmoduloDto) {
    return this.personaModuloSubmoduloService.update(updatePersonaModuloSubmoduloDto.id, updatePersonaModuloSubmoduloDto);
  }

  @MessagePattern('removePersonaModuloSubmodulo')
  remove(@Payload() id: number) {
    return this.personaModuloSubmoduloService.remove(id);
  }
}
