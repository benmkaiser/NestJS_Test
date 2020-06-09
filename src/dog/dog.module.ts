import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogController } from './dog.controller';
import { DogResolver } from './dog.resolver';
import { DogEntity } from './dog.entity';
import { ToyEntity } from '../toy/toy.entity'
import { EmailModule } from 'src/email/email.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([DogEntity, ToyEntity]), EmailModule
    ],
    exports: [
        TypeOrmModule.forFeature([DogEntity, ToyEntity])
    ],
    controllers: [
        DogController
    ],
    providers: [
        DogService, DogResolver
    ]
})
export class DogModule {}

