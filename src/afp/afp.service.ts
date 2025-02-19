import { Injectable } from '@nestjs/common';
import { CreateAfpDto } from './dto/create-afp.dto';
import { UpdateAfpDto } from './dto/update-afp.dto';

@Injectable()
export class AfpService {
  create(createAfpDto: CreateAfpDto) {
    return 'This action adds a new afp';
  }

  findAll() {
    return `This action returns all afp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} afp`;
  }

  update(id: number, updateAfpDto: UpdateAfpDto) {
    return `This action updates a #${id} afp`;
  }

  remove(id: number) {
    return `This action removes a #${id} afp`;
  }
}
