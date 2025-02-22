import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';
import { FindWithFilters } from './dto/filters.dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger('User');

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  test(): string {
    return 'hello users service';
  }

  // Create and save a user
  async create(createUserDto: CreateUserDto): Promise<any> {
    try {
      const user = this.userRepository.create(createUserDto);
      const save_user = await this.userRepository.save(user);
      if (save_user)
        return {
          access: true,
          status: 200,
        };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new RpcException({
          message: error.message,
          statusCode: 400,
        });
      } else {
        throw new RpcException({
          message: 'Unknown error',
          statusCode: 500,
        });
      }
    }
  }

  // Get all users
  async findAllFilters(
    findWithFilters: FindWithFilters,
  ): Promise<[User[], number]> {
    try {
      const { skip, limit, order } = findWithFilters;
      const users = await this.userRepository.findAndCount({
        skip,
        take: limit,
        order: { id: order },
      });

      return users;
    } catch (error) {
      if (error instanceof Error) {
        throw new RpcException({
          message: error.message,
          statusCode: 400,
        });
      } else {
        throw new RpcException({
          message: 'Unknown error',
          statusCode: 500,
        });
      }
    }
  }

  // Get one user
  async findOne(id: number): Promise<any> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          id: id,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new RpcException({
          message: error.message,
          statusCode: 400,
        });
      } else {
        throw new RpcException({
          message: 'Unknown error',
          statusCode: 500,
        });
      }
    }
  }

  // temporarily delete a user
  async remove(id: number) {
    try {
      const user = await this.userRepository.softDelete(id);
      if (user)
        return {
          status: 200,
          message: `The user ${id} has been deleted`,
        };
      return {
        status: 404,
        message: 'Has been an error',
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new RpcException({
          message: error.message,
          statusCode: 400,
        });
      } else {
        throw new RpcException({
          message: 'Unknown error',
          statusCode: 500,
        });
      }
    }
  }
}
