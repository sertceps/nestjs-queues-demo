import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { LoggerService } from '../logger.service';

interface Log {
  level: string;

  method: string;

  url: string;

  request_message: string;

  response_code: number;

  response_message: string;
}

@Processor('logger-queue')
export class LoggerConsumer {
  constructor(private loggerService: LoggerService) {}

  @Process('logger-job')
  async createLog(job: Job<Log>) {
    const log: Log = job.data;
    await this.loggerService.create(log);
  }
}
