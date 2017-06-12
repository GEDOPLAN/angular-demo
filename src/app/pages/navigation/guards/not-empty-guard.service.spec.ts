import { TestBed, inject } from '@angular/core/testing';

import { NotEmptyGuardService } from './not-empty-guard.service';

describe('NotEmptyGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotEmptyGuardService]
    });
  });

  it('should ...', inject([NotEmptyGuardService], (service: NotEmptyGuardService) => {
    expect(service).toBeTruthy();
  }));
});
