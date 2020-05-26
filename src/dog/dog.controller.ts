import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogEntity } from './dog.entity';

@Controller('dog')
export class DogController {
    constructor(private dogService: DogService) {}

    @Get()
    getAllDogs() { 
        return this.dogService.getAllDogs() 
    }

    @Get(':id')
    getDog(@Param() id: string) { 
        return this.dogService.getDog(id); 
    }

    @Post()
    createDog(@Body() data: DogEntity) { 
        return this.dogService.createDog(data); 
    }

    @Put(':id')
    updateDog(@Param() id: string, @Body() data: DogEntity) { 
        return this.dogService.updateDog(data); 
    }

    @Delete(':id')
    putDown(@Param() id: string) { 
        return this.dogService.putDown(id); 
    }
}
