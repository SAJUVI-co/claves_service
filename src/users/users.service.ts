import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';
import { FindWithFilters } from './dto/filters.dto';
import { Errors } from 'src/utils/Errors';

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
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    try {
      console.log(createUserDto);
      const user = this.userRepository.create(createUserDto);
      const save_user = await this.userRepository.save(user);
      if (save_user) console.log(save_user);
      return {
        access: true,
        status: 200,
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        const isDuplicateEntry = error.message.includes('Duplicate entry');
        throw new RpcException({
          message: isDuplicateEntry
            ? 'The user already exists. Please use another data.'
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
  async findAllF(findWithFilters: FindWithFilters): Promise<[User[], number]> {
    try {
      const { skip, limit, order } = findWithFilters;

      const users = await this.userRepository.findAndCount({
        select: ['id', 'user_id', 'created_at', 'updated_at'],
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

  // Get all deleted users //* CHECK
  async findAllDel(findWithFilters: FindWithFilters) {
    try {
      const { skip, limit, order } = findWithFilters;
      const users = await this.userRepository.findAndCount({
        withDeleted: true,
        skip,
        take: limit,
        order: { id: order },
      });

      if (!users) Errors.Nfound('Users not found');

      return users;
    } catch (error: any) {
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

  // Get one user //* CHECK
  async findOneU(id: number): Promise<any> {
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

  // temporarily delete a user //* CHECK
  async softDelete(id: number) {
    try {
      const user = await this.userRepository.softDelete(id);

      if (user.affected === 0) {
        throw new RpcException({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          message: `User with id ${(id as any).id} not found`,
        });
      }

      return 'ok';
    } catch (error) {
      throw new RpcException({
        message: error instanceof Error ? error.message : 'Unknown error',
        statusCode: 400,
      });
    }
  }

  // Delete user //* CHECK
  async delt(id: number) {
    try {
      const user = await this.userRepository.delete(id);

      if (user.affected === 0) {
        throw new RpcException({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          message: `User with id ${(id as any).id} not found`,
        });
      }

      return 'ok';
    } catch (error) {
      throw new RpcException({
        message: error instanceof Error ? error.message : 'Unknown error',
        statusCode: 400,
      });
    }
  }

  // Restore user
  async rest(id: number) {
    try {
      await this.userRepository.restore(id);
      return 'ok';
    } catch (error) {
      throw new RpcException({
        message: error instanceof Error ? error.message : 'Unknown error',
        statusCode: 400,
      });
    }
  }
}
