import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, QueryList, ContentChildren } from '@angular/core';
import { SourceLinkServiceService } from '../services/source-link-service.service';

import { ColorfullComponent } from './colorfull/colorfull.component';
import { BoxComponent } from './box/box.component';
import { BoxHeaderDirective } from './box/box-header.directive';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.less'],
  providers: [
    ColorfullComponent,
    BoxComponent,
    BoxHeaderDirective
  ]
})
export class TemplateComponent implements OnInit, AfterViewInit {

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

  @ViewChildren(ColorfullComponent)
  colorComponents: QueryList<ColorfullComponent>;

  @ViewChild(ColorfullComponent)
  colorComponent: ColorfullComponent;

  @ViewChild('fieldset')
  fieldSetComponent: any;

  anzahlColorComponents: number;

  ngAfterViewInit() {
    this.anzahlColorComponents = this.colorComponents.length;
  }

  @ContentChildren(ColorfullComponent)
  colorComponentsContent: QueryList<ColorfullComponent>;


}
