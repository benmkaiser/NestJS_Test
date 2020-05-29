import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogEntity } from './dog.entity';
import { DogController } from './dog.controller';
import { DogResolver } from './dog.resolver';
import { ToyEntity } from 'src/toy/toy.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DogEntity, ToyEntity])],
    controllers: [DogController],
    providers: [DogService, DogResolver],
    exports: [TypeOrmModule.forFeature([DogEntity])]
})
export class DogModule { }

