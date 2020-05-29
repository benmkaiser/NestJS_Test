import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogModule } from './dog/dog.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ToyModule } from './toy/toy.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: true,
      debug: true
    }),
    DogModule,
    ToyModule
  ]
})
export class AppModule {}
