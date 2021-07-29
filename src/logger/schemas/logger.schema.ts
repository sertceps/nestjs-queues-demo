import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LoggerDocument = Logger & Document;

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

export const LoggerSchema = SchemaFactory.createForClass(Logger);
