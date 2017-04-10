import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-colorfull',
  template: `<button [style.background-color]="getRGBColor()" (click)="change()">Mach mich bunt!</button>`
})
export class ColorfullComponent implements OnChanges {

  addamount = 25;

  @Input()
  rgb = {
    rot: 0,
    gruen: 0,
    blau: 0
  }

  @Input('rgb-string')
  rgbaString: string;

  @Output()
  styleChange:EventEmitter<string>

  constructor() { 
    this.styleChange=new EventEmitter();
  }

  change() {
    Object.keys(this.rgb).forEach(key => this.rgb[key] = (this.rgb[key] + this.addamount) % 255);
    this.styleChange.emit(this.getRGBColor());
  }

  getRGBColor() {
    return `rgb(${this.rgb.rot},${this.rgb.gruen},${this.rgb.blau})`;
  }

  ngOnChanges() {
    if (this.rgbaString) {
      [this.rgb.rot, this.rgb.gruen, this.rgb.blau] = this.rgbaString.split(',').map(s => Number.parseInt(s));
    }
  }
}
