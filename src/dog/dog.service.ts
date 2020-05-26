import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DogEntity } from './dog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDogDto, UpdateDogDto } from './dog';

@Injectable()
export class DogService {
    constructor(
        @InjectRepository(DogEntity) 
        private dogRepository: Repository<DogEntity>
    ) { }

    async getAllDogs() {
        return await this.dogRepository.find();
    }

    async getDog(id: string) {
        return await this.dogRepository.findOne({ where: { id } });
    }

    async createDog(data: CreateDogDto) {
        const dog = await this.dogRepository.create(data);
        return this.dogRepository.save(dog);
    }

    async updateDog(data: UpdateDogDto) {
        await this.dogRepository.update(data.id, data);
        return await this.dogRepository.findOne({ where: data.id });
    }

    async putDown(id: string) {
        await this.dogRepository.delete({ id });
        return { delete: true };
    }
}
