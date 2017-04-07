import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'

@Injectable()
export class HelloServiceService {

  constructor(private http: Http) { }

  public getMessage(): Observable<string> {
    return this.http.get("/api-hello/EchoFromWeb").map(e => e.json()["api-hello"]);
  }
}
