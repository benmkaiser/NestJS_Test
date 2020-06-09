import { Controller, Body, Post } from '@nestjs/common';
import { UpdateService } from './update.service';
import { CreateUpdateDto } from './update';

@Controller('update')
export class UpdateController {
    constructor(private updateService: UpdateService) { }

    // todo: 
    // look up buffer system (queueing system) -- see redis --
    // nomenclature can be better (better noun than 'update')
    @Post()
    createUpdate(@Body() data: CreateUpdateDto) { 
        const createdDog = this.updateService.createUpdate(data); 
        return createdDog;
    }
}
