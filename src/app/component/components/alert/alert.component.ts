import { Component, AfterContentInit, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements AfterContentInit {


  @ViewChild('error', {read: TemplateRef})
  errorTemplate: TemplateRef<any>;

  @ViewChild('info', {read: TemplateRef})
  infoTemplate: TemplateRef<any>;

  @ViewChild('content', {read: ViewContainerRef})
  container: ViewContainerRef;

  @Input()
  level: number;

  @Input()
  headerText: string;
  @Input()
  contentText: string;



  constructor() { }

  ngAfterContentInit() {
    if (this.level == 1) {
      this.container.createEmbeddedView(this.errorTemplate);
    } else {
      this.container.createEmbeddedView(this.infoTemplate);
    }
  }

}
