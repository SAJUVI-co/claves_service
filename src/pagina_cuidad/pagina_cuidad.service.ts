import { Injectable } from '@nestjs/common';
import { CreatePaginaCuidadDto } from './dto/create-pagina_cuidad.dto';
import { UpdatePaginaCuidadDto } from './dto/update-pagina_cuidad.dto';

@Injectable()
export class PaginaCuidadService {
  create(createPaginaCuidadDto: CreatePaginaCuidadDto) {
    return 'This action adds a new paginaCuidad';
  }

  findAll() {
    return `This action returns all paginaCuidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paginaCuidad`;
  }

  update(id: number, updatePaginaCuidadDto: UpdatePaginaCuidadDto) {
    return `This action updates a #${id} paginaCuidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} paginaCuidad`;
  }
}
