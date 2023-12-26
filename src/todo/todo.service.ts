import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from 'src/database/todo.model';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';
// import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  findAll(): any {
    return this.todoModel.find().exec();
  }

  getHello(): string {
    return 'Hello World!';
  }
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.todoModel.findById(id);

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    Object.assign(todo, updateTodoDto);

    return todo.save();
  }

  async delete(id: string): Promise<Todo> {
    const todo = await this.todoModel.findOneAndDelete({ _id: id });
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return todo;
  }
}
