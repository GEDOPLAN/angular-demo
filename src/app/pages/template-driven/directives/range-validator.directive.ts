import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, FormGroup } from '@angular/forms';

@Directive({
  selector: '[rangeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: RangeValidatorDirective, multi: true
    }
  ]
})
export class RangeValidatorDirective {

  constructor() { }

  @Input()
  path1: string;

  @Input()
  path2: string;

  validate(element: FormGroup) {
    let [val1, val2] = [element.get(this.path1), element.get(this.path2)];

    if ([val1, val2].every(e => e && e.value && e.value !== '')) {
      if ([val1.value, val2.value].some(e => !/^\d+$/.test(e))) {
        return { 'invalid-error': { valid: false, message: 'Ungültige Eingabe' } };
      }
      else if (Number.parseInt(val1.value) > Number.parseInt(val2.value)) {
        return { 'range-error': { valid: false, message: 'Erste Zahl muß kleiner sein als die Zweite' } };
      }
    }

    return null;
  }

}
