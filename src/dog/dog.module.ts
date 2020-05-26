import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogEntity } from './dog.entity';
import { DogController } from './dog.controller';
import { DogResolver } from './dog.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([DogEntity])],
    controllers: [DogController],
    providers: [DogService, DogResolver],
    exports: [DogService]
})
export class DogModule {}

