import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from '../logger/logger.service';
import { LoggerConsumer } from '../logger/queues/logger.consumer';
import { LoggerProducer } from '../logger/queues/logger.producer';
import { Logger, LoggerSchema } from '../logger/schemas/logger.schema';
import { User, UserSchema } from './schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Logger.name, schema: LoggerSchema }
    ]),
    BullModule.registerQueue({ name: 'logger-queue', limiter: { max: 1000, duration: 30 } })
  ],
  controllers: [UserController],
  providers: [UserService, LoggerService, LoggerProducer, LoggerConsumer]
})
export class UserModule {}
