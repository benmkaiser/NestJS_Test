import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogModule } from './dog/dog.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ToyModule } from './toy/toy.module';
import { join } from 'path';
import { EmailModule } from './email/email.module';
import { UpdateModule } from './update/update.module';

// todo: use prettierrc --> configure

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: true,
      debug: true
    }),
    DogModule,
    ToyModule,
    EmailModule,
    UpdateModule
  ]
})
export class AppModule {}
