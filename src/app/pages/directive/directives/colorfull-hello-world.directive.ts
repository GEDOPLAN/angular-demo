import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorfullHelloWorld]'
})
export class ColorfullHelloWorldDirective implements OnInit {

  @Input('appColorfullHelloWorld')
  color: string;

  constructor(private element: ElementRef) { }


  ngOnInit() {
    this.element.nativeElement.onmouseover = () => {
      this.element.nativeElement.style.color = this.color;
    }
    this.element.nativeElement.onmouseleave = () => {
      this.element.nativeElement.style.color = 'black';
    }
  }
}
