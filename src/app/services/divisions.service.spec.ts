import { TestBed } from '@angular/core/testing';

import { DivisionService } from './divisions.service';

describe('DivisionsService', () => {
  let service: DivisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
