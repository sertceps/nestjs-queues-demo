import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('file-operation-queue')
export class FileConsumer {
  @Process('delete-file')
  async fileDeletionJob(job: Job<unknown>) {
    const data: any = job.data;
    const file = data.filePath;
    console.log(`deleting----${file}`);
  }
}
