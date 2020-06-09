import { Injectable } from '@nestjs/common';
import { EmailEntity } from './email.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectSendGrid, SendGridService } from '@ntegral/nestjs-sendgrid';
import { CreateEmailDto } from './email';
import file from 'fs';

@Injectable()
export class EmailService {
    constructor(
        @InjectSendGrid() private readonly client: SendGridService,
        @InjectRepository(EmailEntity) private emailRepository: Repository<EmailEntity>
    ) { }

    // SEND EMAIL
    async email(to: string[], cc: string[], bcc: string[], trigger: string, url: string) {
        const file = require("fs");
        const request = require('request');
        request('https://i.pinimg.com/originals/6c/06/7f/6c067f95ccf0401be464131c4e4f6c32.jpg')
            .pipe(file.createWriteStream(`${process.env.BASE_PATH}/test123.png`));   

        const image64 = file.readFileSync(`${process.env.BASE_PATH}/test123.png`, {encoding: 'base64'});
        console.log(image64);

        const message = {
            from: `MASTERY NOTIFICATION <${process.env.TEST_EMAIL_FROM}>`,
            to: ['benmkaiser@gmail.com'],
            subject: `notification`,
            html: '<strong>test</strong>',
            attachments: [
              {
                content: image64,
                filename: 'temp1234.png',
                type: 'image/png',
                disposition: 'attachment',
                contentId: '12345678'
              }
            ]
        };
        //console.log(message);
        // send and log email
        // todo: revise this (promises)
        this.client.send(message)
        .then(([response]) => {
            // gather message id from provider if message passed successfully
            //var responseId = JSON.parse(JSON.stringify(response.headers))['x-message-id'];
            //var email = new CreateEmailDto();
            //email.responseId = responseId;
            //email.address = to.toString();
            //email.event = trigger;
            //email.sent = new Date(Date.now()).toDateString();
            // this needs to be async
            // todo: revise this (promises)
            //this.createEmailRecord(email);
            //console.log(responseId);
        }).catch((error) => {
            console.log(error);
        });     
    }

    // SAVE EMAIL
    async createEmailRecord(data: CreateEmailDto) {
        const email = await this.emailRepository.create({ ...data });
        this.emailRepository.save(email);
        return email;
    }

    // PROCESS ATTACHMENTS FOR EMAIL
    async getStuff(url: string) {
        const request = require('request');
        await request.get(url, function(errors, response, body) {
            return Promise.all(Buffer.from(body).toString('base64'));
        });
    }

    // PROCESS HTML FOR EMAIL
    processHtml() {
        return "<strong>this has been passed through process html</strong>";
    }
}
