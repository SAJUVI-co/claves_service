import { Injectable } from '@nestjs/common';
import { CreateCamaraComercioDto } from './dto/create-camara_comercio.dto';
import { UpdateCamaraComercioDto } from './dto/update-camara_comercio.dto';

@Injectable()
export class CamaraComercioService {
  create(createCamaraComercioDto: CreateCamaraComercioDto) {
    return 'This action adds a new camaraComercio';
  }

  findAll() {
    return `This action returns all camaraComercio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} camaraComercio`;
  }

  update(id: number, updateCamaraComercioDto: UpdateCamaraComercioDto) {
    return `This action updates a #${id} camaraComercio`;
  }

  remove(id: number) {
    return `This action removes a #${id} camaraComercio`;
  }
}
