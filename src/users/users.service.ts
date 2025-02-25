import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { IsNull, Not, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';
import { NotFindDeletedWithFilters } from './dto/filters.dto';

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

  // Create and save a user //* CHECK
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
        const isDuplicateEntry = error.message.includes('Duplicate entry');
        throw new RpcException({
          message: isDuplicateEntry
            ? 'The user already exists. Please use another email to verify your data.'
            : error.message,
          statusCode: 400,
        });
      }

      throw new RpcException({
        message: 'Unknown error',
        statusCode: 500,
      });
    }
  }

  // Get all users //* CHECK
  async findAllFilters(
    notFindDeletedWithFilters: NotFindDeletedWithFilters,
  ): Promise<[User[], number]> {
    try {
      const { skip, limit, order, sh } = notFindDeletedWithFilters;

      // si SH es TRUE trae todos los usuarios que no hayan sido eliminados
      if (sh) {
        return await this.userRepository.findAndCount({
          where: {
            deleted_at: IsNull(),
          },
          select: ['id', 'user_id', 'created_at', 'updated_at'],
          skip,
          take: limit,
          order: { id: order },
        });
      }

      // trae todos los usuarios que han sido eliminados
      const users = await this.userRepository.findAndCount({
        where: {
          deleted_at: Not(IsNull()),
        },
        skip,
        take: limit,
        order: { id: order },
      });

      // si no hay usuarios lanza un error 400
      if (users[1] === 0) {
        throw new RpcException({
          message: 'Users not found',
        });
      }

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
        select: ['id', 'user_id', 'created_at', 'updated_at'],
      });

      if (user === null) {
        throw new RpcException({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          message: `User with id ${(id as any).id} not found`,
        });
      }

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
