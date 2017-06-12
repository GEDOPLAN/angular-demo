import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResolveService implements Resolve<string> {

  constructor() { }

  resolve(): Observable<string> {
    return Observable.from(['Hello World']).delay(5000);
  }
}
