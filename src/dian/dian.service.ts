import { Injectable } from '@nestjs/common';
import { CreateDianDto } from './dto/create-dian.dto';
import { UpdateDianDto } from './dto/update-dian.dto';

@Injectable()
export class DianService {
  create(createDianDto: CreateDianDto) {
    return 'This action adds a new dian';
  }

  findAll() {
    return `This action returns all dian`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dian`;
  }

  update(id: number, updateDianDto: UpdateDianDto) {
    return `This action updates a #${id} dian`;
  }

  remove(id: number) {
    return `This action removes a #${id} dian`;
  }
}
