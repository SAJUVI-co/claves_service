import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ArlService } from './arl.service';
import { CreateArlDto } from './dto/create-arl.dto';
import { UpdateArlDto } from './dto/update-arl.dto';

@Controller()
export class ArlController {
  constructor(private readonly arlService: ArlService) {}

  @MessagePattern('createArl')
  create(@Payload() createArlDto: CreateArlDto) {
    return this.arlService.create(createArlDto);
  }

  @MessagePattern('findAllArl')
  findAll() {
    return this.arlService.findAll();
  }

  @MessagePattern('findOneArl')
  findOne(@Payload() id: number) {
    return this.arlService.findOne(id);
  }

  @MessagePattern('updateArl')
  update(@Payload() updateArlDto: UpdateArlDto) {
    return this.arlService.update(updateArlDto.id, updateArlDto);
  }

  @MessagePattern('removeArl')
  remove(@Payload() id: number) {
    return this.arlService.remove(id);
  }
}
