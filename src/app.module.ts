import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageConsumer } from './message.consumer';
import { MessageProducerService } from './message.producer.service';
import { UserModule } from './user/user.module';

// https://www.learmoreseekmore.com/2021/04/guide-on-nestjs-queues.html
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/queue'),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379
      }
    }),
    BullModule.registerQueue({
      name: 'message-queue'
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, MessageProducerService, MessageConsumer]
})
export class AppModule {}
