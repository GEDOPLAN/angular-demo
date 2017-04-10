import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../services/source-link-service.service';

import {ColorfullComponent} from './colorfull/colorfull.component'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.less'],
  providers: [
    ColorfullComponent
  ]
})
export class TemplateComponent implements OnInit {

  value = 'Hello World';

  constructor(src: SourceLinkServiceService) {
    src.setSourceLink('/src/app/template');
  }

  ngOnInit() {
  }


  change() {
    this.value = this.value + ' - new';
  }

  key: string;

  onEnter() {
    this.key = "enter";
  }

  onAltDown() {
    this.key = "alt+runter";
  }

  in1: string;
  in2: string;

  input(ele: HTMLInputElement) {
    console.log(ele);
  }

  ifCond = false;
  elements = ['Hello', 'World', '!'];
}
