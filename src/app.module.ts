import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageConsumer } from './message-queue/message.consumer';
import { MessageProducer } from './message-queue/message.producer';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379
      }
    }),
    BullModule.registerQueue({ name: 'message-queue' })
  ],
  controllers: [AppController],
  providers: [AppService, MessageProducer, MessageConsumer]
})
export class AppModule {}
