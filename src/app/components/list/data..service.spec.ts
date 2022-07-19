import { TestBed } from '@angular/core/testing';

import { Data.Service } from './data..service';

describe('Data.Service', () => {
  let service: Data.Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Data.Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
