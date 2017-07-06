import { TestBed, inject } from '@angular/core/testing';

import { HelloWorldService } from './hello-world.service';

describe('HelloWorldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelloWorldService]
    });
  });

  it('should ...', inject([HelloWorldService], (service: HelloWorldService) => {
    expect(service).toBeTruthy();
  }));
});
