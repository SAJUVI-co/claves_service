import { Injectable } from '@nestjs/common';
import { CreateClaveDto } from './dto/create-clave.dto';
import { UpdateClaveDto } from './dto/update-clave.dto';

@Injectable()
export class ClavesService {
  create(createClaveDto: CreateClaveDto) {
    return 'This action adds a new clave';
  }

  findAll() {
    return `This action returns all claves`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clave`;
  }

  update(id: number, updateClaveDto: UpdateClaveDto) {
    return `This action updates a #${id} clave`;
  }

  remove(id: number) {
    return `This action removes a #${id} clave`;
  }
}
