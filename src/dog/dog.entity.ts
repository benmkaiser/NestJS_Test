import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ToyEntity } from '../toy/toy.entity';


@Entity('dog')
export class DogEntity {
    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column('text') 
    name: string;

    @Column('text') 
    description: string;

    @OneToMany(type => ToyEntity, toys => toys.dog, { onUpdate: 'CASCADE' })
    toys: ToyEntity[];
}