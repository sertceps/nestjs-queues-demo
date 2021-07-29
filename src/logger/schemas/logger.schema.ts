import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Logger {
  @Prop()
  level: string;

  @Prop()
  method: string;

  @Prop()
  url: string;

  @Prop()
  request_message: string;

  @Prop()
  response_code: number;

  @Prop()
  response_message: string;
}
