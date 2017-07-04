import { TestBed, async, inject } from '@angular/core/testing';

import { SourceLinkGuard } from './source-link.guard';
import { SourceLinkServiceService } from '../services/source-link-service.service';

describe('SourceLinkGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceLinkGuard, SourceLinkServiceService]
    });
  });

  it('should ...', inject([SourceLinkGuard], (guard: SourceLinkGuard) => {
    expect(guard).toBeTruthy();
  }));
});
