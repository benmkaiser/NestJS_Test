import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { Dog, UpdateDogDto, CreateDogDto } from './dog';
import { DogService } from './dog.service';
import { EmailService } from 'src/email/email.service';


@Resolver(of => Dog)
export class DogResolver {
    constructor(
        private dogService: DogService,
        private emailService: EmailService
        ) { }

    @Query(returns => [Dog])
    async getAllDogs() {
        this.emailService.email(['benmkaiser@gmail.com'], null, null, null, null)
        return this.dogService.getAllDogs()
    }

    @Query(returns => Dog)
    async getDog(
        @Args('id', { type: () => ID }) id: string) {
        return this.dogService.getDog(id)
    }

    @Mutation(returns => Dog)
    async updateDog(
        @Args('input', { type: () => UpdateDogDto }) input: UpdateDogDto) {
            return this.dogService.updateDog(input.id, input)
    }

    @Mutation(returns => Dog)
    async createDog(
        @Args('input') input: CreateDogDto) {
            return this.dogService.createDog(input)
    }
}
