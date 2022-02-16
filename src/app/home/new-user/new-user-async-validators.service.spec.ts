import { TestBed } from '@angular/core/testing';

import { NewUserAsyncValidatorsService } from './new-user-async-validators.service';

describe('NewUserAsyncValidatorsService', () => {
  let service: NewUserAsyncValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUserAsyncValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
