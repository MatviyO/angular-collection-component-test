import { TestBed } from '@angular/core/testing';

import { MServiceService } from './m-service.service';

describe('MServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MServiceService = TestBed.get(MServiceService);
    expect(service).toBeTruthy();
  });
});
