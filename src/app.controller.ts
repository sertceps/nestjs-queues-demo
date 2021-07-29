import { Body, Controller, Delete, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { FileProducerService } from './file.producer.service';
import { MessageProducerService } from './message.producer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly messageProducerService: MessageProducerService,
    private readonly fileProducerService: FileProducerService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('invoke-message')
  async getInvokeMessage(@Query('message') message: string) {
    this.messageProducerService.sendMessage(message);
    return message;
  }

  @Delete('remove-file')
  async removeFile(@Body('file_name') file_name: string) {
    console.log('a');

    this.fileProducerService.deleteFile(file_name);
    console.log('b');

    return 'deleted';
  }
}
