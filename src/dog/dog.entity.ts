import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('dog')
export class DogEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

    @Column('text') name: string;

    @Column('text') description: string;
}