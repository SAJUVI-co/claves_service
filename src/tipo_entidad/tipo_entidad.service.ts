import { Injectable } from '@nestjs/common';
import { CreateTipoEntidadDto } from './dto/create-tipo_entidad.dto';
import { UpdateTipoEntidadDto } from './dto/update-tipo_entidad.dto';

@Injectable()
export class TipoEntidadService {
  create(createTipoEntidadDto: CreateTipoEntidadDto) {
    return 'This action adds a new tipoEntidad';
  }

  findAll() {
    return `This action returns all tipoEntidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoEntidad`;
  }

  update(id: number, updateTipoEntidadDto: UpdateTipoEntidadDto) {
    return `This action updates a #${id} tipoEntidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoEntidad`;
  }
}
