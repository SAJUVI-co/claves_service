import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Controller()
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @MessagePattern('createPersona')
  create(@Payload() createPersonaDto: CreatePersonaDto) {
    return this.personaService.create(createPersonaDto);
  }

  @MessagePattern('findAllPersona')
  findAll() {
    return this.personaService.findAll();
  }

  @MessagePattern('findOnePersona')
  findOne(@Payload() id: number) {
    return this.personaService.findOne(id);
  }

  @MessagePattern('updatePersona')
  update(@Payload() updatePersonaDto: UpdatePersonaDto) {
    return this.personaService.update(updatePersonaDto.id, updatePersonaDto);
  }

  @MessagePattern('removePersona')
  remove(@Payload() id: number) {
    return this.personaService.remove(id);
  }
}
