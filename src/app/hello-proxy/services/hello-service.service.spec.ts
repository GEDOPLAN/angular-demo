import { TestBed, inject } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { HelloServiceService } from './hello-service.service';

describe('HelloServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelloServiceService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([HelloServiceService], (service: HelloServiceService) => {
    expect(service).toBeTruthy();
  }));
});
