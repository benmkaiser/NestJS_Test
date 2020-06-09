import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateEntity } from './update.entity';
import { Repository } from 'typeorm';
import { CreateUpdateDto } from './update';

@Injectable()
export class UpdateService {
    public constructor(
        @InjectRepository(UpdateEntity) private updateRepository: Repository<UpdateEntity>
    ) { }

    async createUpdate(data: CreateUpdateDto) {
        const update = await this.updateRepository.create({ ...data });
        this.updateRepository.save(update);
        return update;
    }
}
