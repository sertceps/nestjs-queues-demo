import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { LoggerConsumer } from './logger/queues/logger.consumer';
import { Logger, LoggerSchema } from './logger/schemas/logger.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/queue'),
    MongooseModule.forFeature([{ name: Logger.name, schema: LoggerSchema }]),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379
      }
    }),
    BullModule.registerQueue({ name: 'logger-queue' })
  ],
  controllers: [AppController],
  providers: [AppService, LoggerConsumer, LoggerService]
})
export class AppModule {}
