import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('message-queue')
export class MessageConsumer {
  @Process('message-job')
  consume(job: Job<unknown>) {
    console.log(job.data);
  }

  @Process()
  testConsume(job: Job<unknown>) {
    console.log('no name');

    console.log(job.data);
  }
}
