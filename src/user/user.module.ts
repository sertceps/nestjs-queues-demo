import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerProducer } from '../logger/queues/logger.producer';
import { User, UserSchema } from './schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), BullModule.registerQueue({ name: 'logger-queue' })],
  controllers: [UserController],
  providers: [UserService, LoggerProducer]
})
export class UserModule {}
