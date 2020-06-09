import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql' 
import { Email } from 'src/email/email';

@ObjectType()
export class Update {
    @Field(type => ID)
    id: string

    @Field(type => String)
    responseId: string;

    @Field(type => String)
    address: string;

    @Field(type => String)
    event: string;

    @Field(type => String)
    recieved: string;

    @Field(type => Email, { nullable: true })
    email?: Email;
}

@InputType()
export class CreateUpdateDto {
    @Field(type => String)
    responseId: string;

    @Field(type => String)
    address: string;

    @Field(type => String)
    event: string;

    @Field(type => String)
    recieved: string;
}

