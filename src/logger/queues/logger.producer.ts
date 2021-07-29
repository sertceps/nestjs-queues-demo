import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

interface Log {
  level: string;

  method: string;

  url: string;

  request_message: string;

  response_code: number;

  response_message: string;
}
@Injectable()
export class LoggerProducer {
  constructor(@InjectQueue('logger-queue') private loggerQueue: Queue) {}

  async createLog(log: Log) {
    await this.loggerQueue.add('logger-job', log);
  }
}
