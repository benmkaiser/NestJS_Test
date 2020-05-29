import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { DogEntity } from 'src/dog/dog.entity';

@Entity('toy')
export class ToyEntity {
    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column('text') 
    description: string;

    @ManyToOne(type => DogEntity, dog => dog.toys, { onUpdate: 'CASCADE' })
    dog: DogEntity;
}