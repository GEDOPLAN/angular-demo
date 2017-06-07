import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';

import { Observable } from 'rxjs'
import 'rxjs/Rx';

@Directive({
  selector: '[asyncPostValidator]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: AsyncPostValidatorDirective, multi: true }
  ]
})
export class AsyncPostValidatorDirective {

  constructor(private http: Http) { }

  validate(element: AbstractControl) {
    if (element && element.value && element.value !== '') {
      return this.http
        .get("https://jsonplaceholder.typicode.com/users")
        .map(r => r.json())
        .first()
        .map((e: any[]) => e.some(ele => {
          return ele.id == element.value
        }))
        .do(e => console.log(e))
        .map(e => e ? null : { "usernot": "Benutzer existiert nicht" });
    }

    return Observable.from([null]);
  }
}
