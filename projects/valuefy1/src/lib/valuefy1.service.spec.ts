import { TestBed } from '@angular/core/testing';

import { Valuefy1Service } from './valuefy1.service';

describe('Valuefy1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Valuefy1Service = TestBed.get(Valuefy1Service);
    expect(service).toBeTruthy();
  });
});
