import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql' 
import { Update } from 'src/update/update';

@ObjectType()
export class Email {
    @Field(type => ID)
    id: string

    @Field(type => String)
    responseId: string;

    @Field(type => String)
    address: string;

    @Field(type => String)
    event: string;

    @Field(type => String)
    sent: string;

    @Field(type => [Update], { nullable: true })
    updates?: Update[];
}

@InputType()
export class CreateEmailDto {
    @Field(type => String)
    responseId: string;

    @Field(type => String)
    address: string;

    @Field(type => String)
    event: string;

    @Field(type => String)
    sent: string;
}

