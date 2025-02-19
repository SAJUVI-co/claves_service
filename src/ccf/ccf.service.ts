import { Injectable } from '@nestjs/common';
import { CreateCcfDto } from './dto/create-ccf.dto';
import { UpdateCcfDto } from './dto/update-ccf.dto';

@Injectable()
export class CcfService {
  create(createCcfDto: CreateCcfDto) {
    return 'This action adds a new ccf';
  }

  findAll() {
    return `This action returns all ccf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ccf`;
  }

  update(id: number, updateCcfDto: UpdateCcfDto) {
    return `This action updates a #${id} ccf`;
  }

  remove(id: number) {
    return `This action removes a #${id} ccf`;
  }
}
