import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class MessageProducer {
  constructor(@InjectQueue('message-queue') private queue: Queue) {}

  async sendMessage(message: string) {
    await this.queue.add('message-job', {
      message
    });
  }

  async testMessage(message: string) {
    await this.queue.add({
      message
    });
  }

  async testMessage2(score: number) {
    await this.queue.add({
      score
    });
  }
}
