import { Resolver, Query, Args, ID, Mutation, ResolveField, Parent } from '@nestjs/graphql';
import { Toy, UpdateToyDto, CreateToyDto } from './toy';
import { ToyService } from './toy.service';
import { DogService } from 'src/dog/dog.service';

@Resolver(of => Toy)
export class ToyResolver {
    constructor(
        private toyService: ToyService
    ) { }

    @Query(returns => [Toy])
    async getAllToys() {
        return this.toyService.getAllToys()
    }

    @Query(returns => Toy)
    async getToy(@Args('id', { type: () => ID }) id: string) {
        return this.toyService.getToy(id)
    }

    @Mutation(returns => Toy)
    async updateToy(
        @Args('input', { type: () => UpdateToyDto }) input: UpdateToyDto) {
            return this.toyService.updateToy(input.id, input)
    }

    @Mutation(returns => Toy)
    async createToy(
        @Args('input') input: CreateToyDto) {
            return this.toyService.createToy(input)
    }
}
