import { Injectable } from '@nestjs/common';
import { CreateTiposPlantillaDto } from './dto/create-tipos_plantilla.dto';
import { UpdateTiposPlantillaDto } from './dto/update-tipos_plantilla.dto';

@Injectable()
export class TiposPlantillaService {
  create(createTiposPlantillaDto: CreateTiposPlantillaDto) {
    return 'This action adds a new tiposPlantilla';
  }

  findAll() {
    return `This action returns all tiposPlantilla`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiposPlantilla`;
  }

  update(id: number, updateTiposPlantillaDto: UpdateTiposPlantillaDto) {
    return `This action updates a #${id} tiposPlantilla`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposPlantilla`;
  }
}
