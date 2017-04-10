import { TestBed, inject } from '@angular/core/testing';

import { SourceLinkServiceService } from './source-link-service.service';

describe('SourceLinkServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceLinkServiceService]
    });
  });

  it('should ...', inject([SourceLinkServiceService], (service: SourceLinkServiceService) => {
    expect(service).toBeTruthy();
  }));
});
