import { Module } from '@nestjs/common';
import { UserServiceService } from './user_service.service';
import { UserServiceController } from './user_service.controller';

@Module({
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule {}
