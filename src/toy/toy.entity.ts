import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class ToyEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

    @Column('text') name: string;

    @Column('text') description: string;
}