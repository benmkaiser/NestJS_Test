import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UpdateEntity } from 'src/update/update.entity';


@Entity('email')
export class EmailEntity {
    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column('text') 
    responseId: string;

    @Column('text') 
    address: string;

    @Column('text') 
    event: string;

    @Column('text')
    sent: string;

    @OneToMany(type => UpdateEntity, updates => updates.email, { onUpdate: 'CASCADE' })
    updates: UpdateEntity[];
}