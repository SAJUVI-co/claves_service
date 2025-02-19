import { Injectable } from '@nestjs/common';
import { CreateSuperintendenciaDto } from './dto/create-superintendencia.dto';
import { UpdateSuperintendenciaDto } from './dto/update-superintendencia.dto';

@Injectable()
export class SuperintendenciaService {
  create(createSuperintendenciaDto: CreateSuperintendenciaDto) {
    return 'This action adds a new superintendencia';
  }

  findAll() {
    return `This action returns all superintendencia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} superintendencia`;
  }

  update(id: number, updateSuperintendenciaDto: UpdateSuperintendenciaDto) {
    return `This action updates a #${id} superintendencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} superintendencia`;
  }
}
