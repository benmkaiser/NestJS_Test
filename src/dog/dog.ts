import { ObjectType, Field, ID, InputType } from '@nestjs/graphql' 
import { Toy } from '../toy/toy';

@ObjectType()
export class Dog {
    @Field(type => ID)
    id: string;

    @Field(type => String)
    name: string;

    @Field(type => String)
    description: string;

    @Field(type => [Toy], { nullable: true })
    toys?: Toy[];
}

@InputType()
export class CreateDogDto {
    @Field(type => String)
    name: string;

    @Field(type => String)
    description: string;
}

@InputType()
export class UpdateDogDto {
    @Field(type => ID)
    id: string;

    @Field(type => String)
    name: string;

    @Field(type => String)
    description: string;
}
