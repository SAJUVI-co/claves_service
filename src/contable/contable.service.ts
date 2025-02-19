import { Injectable } from '@nestjs/common';
import { CreateContableDto } from './dto/create-contable.dto';
import { UpdateContableDto } from './dto/update-contable.dto';

@Injectable()
export class ContableService {
  create(createContableDto: CreateContableDto) {
    return 'This action adds a new contable';
  }

  findAll() {
    return `This action returns all contable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contable`;
  }

  update(id: number, updateContableDto: UpdateContableDto) {
    return `This action updates a #${id} contable`;
  }

  remove(id: number) {
    return `This action removes a #${id} contable`;
  }
}
