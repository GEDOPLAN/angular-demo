import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  get(): Observable<any[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(r => r.json());
  }

}
