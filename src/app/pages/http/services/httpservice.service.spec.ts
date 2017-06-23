import { TestBed, inject } from '@angular/core/testing';

import { HTTPServiceService } from './httpservice.service';

describe('HTTPServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HTTPServiceService]
    });
  });

  it('should ...', inject([HTTPServiceService], (service: HTTPServiceService) => {
    expect(service).toBeTruthy();
  }));
});
