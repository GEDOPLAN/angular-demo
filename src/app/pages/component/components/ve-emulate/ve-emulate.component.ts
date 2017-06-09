import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ve-emulate',
  templateUrl: './ve-emulate.component.html',
  styleUrls: ['./ve-emulate.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VeEmulateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
