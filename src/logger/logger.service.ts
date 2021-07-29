import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Logger, LoggerDocument } from './schemas/logger.schema';

@Injectable()
export class LoggerService {
  constructor(
    @InjectModel(Logger.name)
    private readonly loggerModel: Model<LoggerDocument>
  ) {}

  async create(log: Logger) {
    return this.loggerModel.create(log);
  }
}
