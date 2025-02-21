import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ContableProgramaService } from './contable_programa.service';
import { CreateContableProgramaDto } from './dto/create-contable_programa.dto';
import { UpdateContableProgramaDto } from './dto/update-contable_programa.dto';

@Controller()
export class ContableProgramaController {
  constructor(private readonly contableProgramaService: ContableProgramaService) {}

  @MessagePattern('createContablePrograma')
  create(@Payload() createContableProgramaDto: CreateContableProgramaDto) {
    return this.contableProgramaService.create(createContableProgramaDto);
  }

  @MessagePattern('findAllContablePrograma')
  findAll() {
    return this.contableProgramaService.findAll();
  }

  @MessagePattern('findOneContablePrograma')
  findOne(@Payload() id: number) {
    return this.contableProgramaService.findOne(id);
  }

  @MessagePattern('updateContablePrograma')
  update(@Payload() updateContableProgramaDto: UpdateContableProgramaDto) {
    return this.contableProgramaService.update(updateContableProgramaDto.id, updateContableProgramaDto);
  }

  @MessagePattern('removeContablePrograma')
  remove(@Payload() id: number) {
    return this.contableProgramaService.remove(id);
  }
}
