import { TestBed } from '@angular/core/testing';

import { ListPetsResolver } from './list-pets.resolver';

describe('ListPetsResolver', () => {
  let resolver: ListPetsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListPetsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
