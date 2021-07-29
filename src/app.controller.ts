import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageProducer } from './message-queue/message.producer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly messageProducer: MessageProducer) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('messages')
  async getInvokeMessage(@Query('message') message: string) {
    this.messageProducer.sendMessage(message);
    // this.messageProducer.testMessage(message);
    // this.messageProducer.testMessage2(100);
    return message;
  }
}
