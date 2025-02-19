import { Injectable } from '@nestjs/common';
import { CreateAlcaldiaDto } from './dto/create-alcaldia.dto';
import { UpdateAlcaldiaDto } from './dto/update-alcaldia.dto';

@Injectable()
export class AlcaldiaService {
  create(createAlcaldiaDto: CreateAlcaldiaDto) {
    return 'This action adds a new alcaldia';
  }

  findAll() {
    return `This action returns all alcaldia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alcaldia`;
  }

  update(id: number, updateAlcaldiaDto: UpdateAlcaldiaDto) {
    return `This action updates a #${id} alcaldia`;
  }

  remove(id: number) {
    return `This action removes a #${id} alcaldia`;
  }
}
