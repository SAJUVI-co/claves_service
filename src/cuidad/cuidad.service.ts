import { Injectable } from '@nestjs/common';
import { CreateCuidadDto } from './dto/create-cuidad.dto';
import { UpdateCuidadDto } from './dto/update-cuidad.dto';

@Injectable()
export class CuidadService {
  create(createCuidadDto: CreateCuidadDto) {
    return 'This action adds a new Cuidad';
  }

  findAll() {
    return `This action returns all Cuidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Cuidad`;
  }

  update(id: number, updateCuidadDto: UpdateCuidadDto) {
    return `This action updates a #${id} Cuidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} Cuidad`;
  }
}
