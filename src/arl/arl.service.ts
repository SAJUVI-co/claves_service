import { Injectable } from '@nestjs/common';
import { CreateArlDto } from './dto/create-arl.dto';
import { UpdateArlDto } from './dto/update-arl.dto';

@Injectable()
export class ArlService {
  create(createArlDto: CreateArlDto) {
    return 'This action adds a new arl';
  }

  findAll() {
    return `This action returns all arl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arl`;
  }

  update(id: number, updateArlDto: UpdateArlDto) {
    return `This action updates a #${id} arl`;
  }

  remove(id: number) {
    return `This action removes a #${id} arl`;
  }
}
