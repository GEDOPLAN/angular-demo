import { TestBed, async, inject } from '@angular/core/testing';

import { SourceLinkGuard } from './source-link.guard';

describe('SourceLinkGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceLinkGuard]
    });
  });

  it('should ...', inject([SourceLinkGuard], (guard: SourceLinkGuard) => {
    expect(guard).toBeTruthy();
  }));
});
