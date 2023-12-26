import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { DatabaseModule } from './database/database.module

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot(
      'mongodb+srv://xzodus:toon40961@markxsurf.np6kr9d.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
