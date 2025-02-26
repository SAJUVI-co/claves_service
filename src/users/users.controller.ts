import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FindWithFilters } from './dto/filters.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'createUser' })
  create(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'findAllUsers' })
  findAllF(@Payload() findWithFilters: FindWithFilters) {
    return this.usersService.findAllF(findWithFilters);
  }

  @MessagePattern({ cmd: 'findAllDeletedUsers' })
  findAllDel(@Payload() findWithFilters: FindWithFilters) {
    return this.usersService.findAllDel(findWithFilters);
  }

  @MessagePattern({ cmd: 'findOneUser' })
  findOneU(@Payload() id: number) {
    return this.usersService.findOneU(id);
  }

  @MessagePattern({ cmd: 'SD_user' })
  softDelete(@Payload() id: number) {
    return this.usersService.softDelete(id);
  }

  @MessagePattern({ cmd: 'DEL_use' })
  delt(@Payload() id: number) {
    return this.usersService.delt(id);
  }

  @MessagePattern({ cmd: 'res_User' })
  rest(@Payload() id: number) {
    return this.usersService.rest(id);
  }
}
