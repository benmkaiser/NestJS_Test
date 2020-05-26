import { Controller, Get, Post } from '@nestjs/common';

@Controller('toy')
export class ToyController {
    @Post()
    create(): string {
        return 'This action adds a new toy';
    }

    @Get()
    findAll(): string {
        return 'this will return all toys';
    }
}
