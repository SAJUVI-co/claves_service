import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PersonaRepresentanteService } from './persona_representante.service';
import { CreatePersonaRepresentanteDto } from './dto/create-persona_representante.dto';
import { UpdatePersonaRepresentanteDto } from './dto/update-persona_representante.dto';

@Controller()
export class PersonaRepresentanteController {
  constructor(private readonly personaRepresentanteService: PersonaRepresentanteService) {}

  @MessagePattern('createPersonaRepresentante')
  create(@Payload() createPersonaRepresentanteDto: CreatePersonaRepresentanteDto) {
    return this.personaRepresentanteService.create(createPersonaRepresentanteDto);
  }

  @MessagePattern('findAllPersonaRepresentante')
  findAll() {
    return this.personaRepresentanteService.findAll();
  }

  @MessagePattern('findOnePersonaRepresentante')
  findOne(@Payload() id: number) {
    return this.personaRepresentanteService.findOne(id);
  }

  @MessagePattern('updatePersonaRepresentante')
  update(@Payload() updatePersonaRepresentanteDto: UpdatePersonaRepresentanteDto) {
    return this.personaRepresentanteService.update(updatePersonaRepresentanteDto.id, updatePersonaRepresentanteDto);
  }

  @MessagePattern('removePersonaRepresentante')
  remove(@Payload() id: number) {
    return this.personaRepresentanteService.remove(id);
  }
}
