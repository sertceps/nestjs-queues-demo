import { Body, Controller, Post } from '@nestjs/common';
import { LoggerProducer } from '../logger/queues/logger.producer';
import { UserService } from './user.service';

interface Log {
  level: string;

  method: string;

  url: string;

  request_message: string;

  response_code: number;

  response_message: string;
}

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService, private readonly loggerProducer: LoggerProducer) {}

  @Post()
  async create(@Body() body: any) {
    const user = await this.userService.create(body);

    const log: Log = {
      level: 'info',
      method: 'Post',
      url: '/users',
      request_message: JSON.stringify(body),
      response_code: 200,
      response_message: JSON.stringify({ id: user._id })
    };
    this.loggerProducer.createLog(log);

    return { id: user._id };
  }
}
