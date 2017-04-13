import { Directive, ElementRef, Input, HostBinding, OnChanges } from '@angular/core';

const ERROR_STYLE = "2px solid red";

@Directive({
  selector: 'button[appErrorbutton]'
})
export class ErrorbuttonDirective implements OnChanges {

  @Input()
  errormessage: string;

  @Input()
  error: boolean;

  @HostBinding()
  disabled: boolean;

  @HostBinding()
  title: string;

  @HostBinding('style.border')
  border: string;

  private initStyle: string;

  constructor(element: ElementRef) {
    this.initStyle = element.nativeElement.style.border;
  }

  ngOnChanges() {
    this.disabled = this.error;
    if (this.error) {
      this.title = this.errormessage;
      this.border = ERROR_STYLE;
    } else {
      this.title = '';
      this.border = this.initStyle;
    }
  }

}
