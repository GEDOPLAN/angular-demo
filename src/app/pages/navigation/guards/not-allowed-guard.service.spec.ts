import { TestBed, inject } from '@angular/core/testing';

import { NotAllowedGuardService } from './not-allowed-guard.service';

describe('NotAllowedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotAllowedGuardService]
    });
  });

  it('should ...', inject([NotAllowedGuardService], (service: NotAllowedGuardService) => {
    expect(service).toBeTruthy();
  }));
});
