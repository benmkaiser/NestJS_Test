import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Dog } from '../dog/dog';

@ObjectType()
export class Toy {
    @Field(type => ID)
    id: string;

    @Field(type => String)
    description: string;

    @Field(type => Dog, { nullable: true })
    dog?: Dog;
}

@InputType()
export class CreateToyDto {
    @Field(type => String)
    description: string;

    @Field(type => String)
    dogId: string;
}

@InputType()
export class UpdateToyDto {
    @Field(type => ID)
    id: string;

    @Field(type => String)
    description: string;

    @Field(type => String)
    dogId: string;
}
