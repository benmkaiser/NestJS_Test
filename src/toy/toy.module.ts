import { Module } from '@nestjs/common';
import { ToyService } from './toy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToyEntity } from './toy.entity';
import { ToyController } from './toy.controller';
import { ToyResolver } from './toy.resolver';
import { DogEntity } from 'src/dog/dog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToyEntity, DogEntity])],
  controllers: [ToyController],
  providers: [ToyService, ToyResolver],
  exports: [TypeOrmModule.forFeature([ToyEntity])]
})
export class ToyModule { }
