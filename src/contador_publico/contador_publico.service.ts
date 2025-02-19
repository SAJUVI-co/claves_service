import { Injectable } from '@nestjs/common';
import { CreateContadorPublicoDto } from './dto/create-contador_publico.dto';
import { UpdateContadorPublicoDto } from './dto/update-contador_publico.dto';

@Injectable()
export class ContadorPublicoService {
  create(createContadorPublicoDto: CreateContadorPublicoDto) {
    return 'This action adds a new contadorPublico';
  }

  findAll() {
    return `This action returns all contadorPublico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contadorPublico`;
  }

  update(id: number, updateContadorPublicoDto: UpdateContadorPublicoDto) {
    return `This action updates a #${id} contadorPublico`;
  }

  remove(id: number) {
    return `This action removes a #${id} contadorPublico`;
  }
}
