import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { ToyService } from './toy.service';
import { ToyEntity } from './toy.entity';
import { CreateToyDto, UpdateToyDto } from './toy';

@Controller('toy')
export class ToyController {
    constructor(private toyService: ToyService) {}

    @Get()
    getAllToys() { 
        return this.toyService.getAllToys() 
    }

    @Get(':id')
    getToy(@Param() id: string) { 
        return this.toyService.getToy(id); 
    }

    @Post()
    createToy(@Body() data: CreateToyDto) { 
        return this.toyService.createToy(data); 
    }

    @Put(':id')
    updateToy(@Param() id: string, @Body() data: UpdateToyDto) { 
        return this.toyService.updateToy(id, data); 
    }

    @Delete(':id')
    kill(@Param() id: string) { 
        return this.toyService.kill(id); 
    }
}
