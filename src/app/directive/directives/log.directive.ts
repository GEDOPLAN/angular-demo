import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLog]'
})
export class LogDirective {

  @HostBinding('innerHTML')
  text: string = "logged button";

  private id: string;

  constructor(element: ElementRef) {
    this.id = element.nativeElement.id;
  }

  @HostListener('click', ['$event', 'sddf'])
  onClick($event) {
    console.log(`Clicked: ${$event.currentTarget.id}`);
  }
}
