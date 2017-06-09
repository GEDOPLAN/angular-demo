import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-iteration-component',
  templateUrl: './iteration-component.component.html',
  styleUrls: ['./iteration-component.component.less']
})
export class IterationComponentComponent implements OnInit {

  @Input()
  entries: any[];

  @ContentChild(TemplateRef)
  customeListEntry: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
