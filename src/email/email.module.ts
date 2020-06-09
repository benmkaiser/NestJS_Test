import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailEntity } from './email.entity';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { SendGridModule } from '@ntegral/nestjs-sendgrid' 

@Module({
    imports: [
        SendGridModule.forRoot({ apiKey: process.env.SENDGRID_API_KEY }),
        TypeOrmModule.forFeature([EmailEntity])
    ],
    exports: [
        TypeOrmModule.forFeature([EmailEntity]), 
        EmailService
    ],
    controllers: [
        EmailController
    ],
    providers: [
        EmailService
    ]
})
export class EmailModule {}

