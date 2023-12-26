import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop()
  createDate: Date;

  @Prop()
  updateDate: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
