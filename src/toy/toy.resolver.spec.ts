import { Test, TestingModule } from '@nestjs/testing';
import { ToyResolver } from './toy.resolver';

describe('ToyResolver', () => {
  let resolver: ToyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToyResolver],
    }).compile();

    resolver = module.get<ToyResolver>(ToyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
