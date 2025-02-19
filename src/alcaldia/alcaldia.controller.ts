import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AlcaldiaService } from './alcaldia.service';
import { CreateAlcaldiaDto } from './dto/create-alcaldia.dto';
import { UpdateAlcaldiaDto } from './dto/update-alcaldia.dto';

@Controller()
export class AlcaldiaController {
  constructor(private readonly alcaldiaService: AlcaldiaService) {}

  @MessagePattern('createAlcaldia')
  create(@Payload() createAlcaldiaDto: CreateAlcaldiaDto) {
    return this.alcaldiaService.create(createAlcaldiaDto);
  }

  @MessagePattern('findAllAlcaldia')
  findAll() {
    return this.alcaldiaService.findAll();
  }

  @MessagePattern('findOneAlcaldia')
  findOne(@Payload() id: number) {
    return this.alcaldiaService.findOne(id);
  }

  @MessagePattern('updateAlcaldia')
  update(@Payload() updateAlcaldiaDto: UpdateAlcaldiaDto) {
    return this.alcaldiaService.update(updateAlcaldiaDto.id, updateAlcaldiaDto);
  }

  @MessagePattern('removeAlcaldia')
  remove(@Payload() id: number) {
    return this.alcaldiaService.remove(id);
  }
}
