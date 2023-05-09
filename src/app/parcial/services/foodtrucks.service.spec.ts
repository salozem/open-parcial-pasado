import { TestBed } from '@angular/core/testing';

import { FoodtrucksService } from './foodtrucks.service';

describe('FoodtruckService', () => {
  let service: FoodtrucksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodtrucksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
