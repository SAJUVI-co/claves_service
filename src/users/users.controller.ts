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
  findAll(@Payload() findWithFilters: FindWithFilters) {
    return this.usersService.findAllFilters(findWithFilters);
  }

  @MessagePattern({ cmd: 'findOneUser' })
  findOne(@Payload() id: number) {
    return this.usersService.findOne(id);
  }

  @MessagePattern({ cmd: 'removeUser' })
  remove(@Payload() id: number) {
    return this.usersService.remove(id);
  }
}
