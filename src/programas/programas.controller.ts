import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProgramasService } from './programas.service';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';

@Controller()
export class ProgramasController {
  constructor(private readonly programasService: ProgramasService) {}

  @MessagePattern('createPrograma')
  create(@Payload() createProgramaDto: CreateProgramaDto) {
    return this.programasService.create(createProgramaDto);
  }

  @MessagePattern('findAllProgramas')
  findAll() {
    return this.programasService.findAll();
  }

  @MessagePattern('findOnePrograma')
  findOne(@Payload() id: number) {
    return this.programasService.findOne(id);
  }

  @MessagePattern('updatePrograma')
  update(@Payload() updateProgramaDto: UpdateProgramaDto) {
    return this.programasService.update(updateProgramaDto.id, updateProgramaDto);
  }

  @MessagePattern('removePrograma')
  remove(@Payload() id: number) {
    return this.programasService.remove(id);
  }
}
