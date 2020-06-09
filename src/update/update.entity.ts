import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { EmailEntity } from 'src/email/email.entity';


@Entity('update')
export class UpdateEntity {
    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column('text') 
    responseId: string;

    @Column('text') 
    address: string;

    @Column('text') 
    event: string;

    @Column('text')
    recieved: string;

    @ManyToOne(type => EmailEntity, email => email.updates, { onUpdate: 'CASCADE' })
    email: EmailEntity;
}