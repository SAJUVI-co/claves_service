import { Injectable } from '@nestjs/common';
import { CreateContableProgramaDto } from './dto/create-contable_programa.dto';
import { UpdateContableProgramaDto } from './dto/update-contable_programa.dto';

@Injectable()
export class ContableProgramaService {
  create(createContableProgramaDto: CreateContableProgramaDto) {
    return 'This action adds a new contablePrograma';
  }

  findAll() {
    return `This action returns all contablePrograma`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contablePrograma`;
  }

  update(id: number, updateContableProgramaDto: UpdateContableProgramaDto) {
    return `This action updates a #${id} contablePrograma`;
  }

  remove(id: number) {
    return `This action removes a #${id} contablePrograma`;
  }
}
