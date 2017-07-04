import { TestBed, inject, async} from '@angular/core/testing';
import {Http, HttpModule} from '@angular/http';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HttpService]
    });
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  it('should deliver users', async(inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
    service.get().subscribe(r => {
      expect(r.length).toBe(10);
      expect(r[0].username).toBe('Bret');
    });
  })));
});
