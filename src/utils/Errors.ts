import { RpcException } from '@nestjs/microservices';

export class Errors {
  constructor() {}

  static Nfound(m: string) {
    throw new RpcException({
      message: m,
    });
  }
}
