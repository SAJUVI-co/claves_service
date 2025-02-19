import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AfpService } from './afp.service';
import { CreateAfpDto } from './dto/create-afp.dto';
import { UpdateAfpDto } from './dto/update-afp.dto';

@Controller()
export class AfpController {
  constructor(private readonly afpService: AfpService) {}

  @MessagePattern('createAfp')
  create(@Payload() createAfpDto: CreateAfpDto) {
    return this.afpService.create(createAfpDto);
  }

  @MessagePattern('findAllAfp')
  findAll() {
    return this.afpService.findAll();
  }

  @MessagePattern('findOneAfp')
  findOne(@Payload() id: number) {
    return this.afpService.findOne(id);
  }

  @MessagePattern('updateAfp')
  update(@Payload() updateAfpDto: UpdateAfpDto) {
    return this.afpService.update(updateAfpDto.id, updateAfpDto);
  }

  @MessagePattern('removeAfp')
  remove(@Payload() id: number) {
    return this.afpService.remove(id);
  }
}
