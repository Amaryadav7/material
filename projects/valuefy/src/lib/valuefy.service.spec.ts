import { TestBed } from '@angular/core/testing';

import { ValuefyService } from './valuefy.service';

describe('ValuefyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValuefyService = TestBed.get(ValuefyService);
    expect(service).toBeTruthy();
  });
});
