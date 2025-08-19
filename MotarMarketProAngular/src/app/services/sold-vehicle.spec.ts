import { TestBed } from '@angular/core/testing';

import { SoldVehicle } from './sold-vehicle';

describe('SoldVehicle', () => {
  let service: SoldVehicle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoldVehicle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
