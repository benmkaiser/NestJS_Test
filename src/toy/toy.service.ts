import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ToyEntity } from './toy.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateToyDto, UpdateToyDto } from './toy';
import { DogEntity } from '../dog/dog.entity';

@Injectable()
export class ToyService {
    constructor(
        @InjectRepository(ToyEntity) 
        private toyRepository: Repository<ToyEntity>,
        @InjectRepository(DogEntity) 
        private dogRepository: Repository<DogEntity>,
    ) { }

    async getAllToys() {
        return await this.toyRepository.find({ relations: ["dog"] });
    }

    async getToy(id: string) {
        return await this.toyRepository.findOne({ where: { id } });
    }

    async createToy(data: CreateToyDto) {
        const dog = await this.dogRepository.findOne({ where: { id: data.dogId } });
        const toy = await this.toyRepository.create({ ...data, dog: dog });
        return this.toyRepository.save(toy);
    }

    async updateToy(id: string, data: UpdateToyDto) {
        const dog = await this.dogRepository.findOne({ where: { id: data.dogId } });
        return this.toyRepository.update({ id }, { ...data, dog: dog });
    }

    async kill(id: string) {
        await this.toyRepository.delete({ id });
        return { delete: true };
    }
}
