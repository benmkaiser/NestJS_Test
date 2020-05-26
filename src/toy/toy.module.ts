import { Module } from '@nestjs/common';
import { ToyService } from './toy.service';

@Module({
  providers: [ToyService]
})
export class ToyModule {}
