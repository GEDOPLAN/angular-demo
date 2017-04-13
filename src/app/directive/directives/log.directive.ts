import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLog]'
})
export class LogDirective {

  constructor() { }

  @HostBinding('innerHTML')
  text: string = "logged button";


  @HostListener('click', ['$event'])
  onClick($event) {
    console.log(`Clicked: ${$event.currentTarget.id}`);
  }
}
