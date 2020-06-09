import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DogEntity } from './dog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDogDto, UpdateDogDto } from './dog';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class DogService {
    public constructor(
        @Inject(forwardRef(() => EmailService)) private readonly emailService: EmailService,
        @InjectRepository(DogEntity) private dogRepository: Repository<DogEntity>
    ) { }

    async getAllDogs() {
        var dogs = await this.dogRepository.find({ relations: ["toys"] });
        var url = process.env.URL2;
        this.emailService.email(['benmkaiser@gmail.com'], [], [], 'event', url);
        return dogs;
    }

    async getDog(id: string) {
        return await this.dogRepository.findOne({ where: { id } });
    }

    async createDog(data: CreateDogDto) {
        const dog = await this.dogRepository.create({ ...data });
        this.dogRepository.save(dog);
        return dog;
    }

    async updateDog(id: string, data: UpdateDogDto) {
        await this.dogRepository.update({ id }, { ...data });
        return await this.dogRepository.findOne({ where: { id } });
    }

    async putDown(id: string) {
        await this.dogRepository.delete({ id });
        return { delete: true };
    }
}
