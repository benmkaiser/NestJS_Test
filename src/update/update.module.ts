import { Module } from '@nestjs/common';
import { UpdateService } from './update.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpdateEntity } from './update.entity';
import { UpdateController } from './update.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UpdateEntity])
],
exports: [
    TypeOrmModule.forFeature([UpdateEntity]), 
    UpdateService
],
controllers: [
    UpdateController
],
  providers: [
    UpdateService
  ]
})
export class UpdateModule {}
