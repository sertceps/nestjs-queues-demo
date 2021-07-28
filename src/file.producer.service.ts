import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class FileProducerServcie {
  constructor(@InjectQueue('file-operation-queue') private queue: Queue) {}

  async deleteFile(fileName: string) {
    const path = '/test/path/';
  }
}
