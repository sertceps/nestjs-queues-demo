import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileConsumer } from './file.consumer';
import { FileProducerService } from './file.producer.service';
import { MessageConsumer } from './message.consumer';
import { MessageProducerService } from './message.producer.service';

// https://www.learmoreseekmore.com/2021/04/guide-on-nestjs-queues.html
@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379
      }
    }),
    BullModule.registerQueue(
      {
        name: 'message-queue'
      },
      { name: 'file-operation-queue' }
    )
  ],
  controllers: [AppController],
  providers: [AppService, MessageProducerService, MessageConsumer, FileProducerService, FileConsumer]
})
export class AppModule {}
