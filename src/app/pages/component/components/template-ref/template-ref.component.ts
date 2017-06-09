import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.less']
})
export class TemplateRefComponent implements OnInit {

  @Input()
  header: string;

  @Input()
  footer: string;

  @Input()
  content: string;

  @ContentChild('headerOutlet')
  headerOutlet: TemplateRef<any>

  @ContentChild('contentOutlet')
  contentOutlet: TemplateRef<any>

  @ContentChild('footerOutlet')
  footerOutlet: TemplateRef<any>

  public templateDefined: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

}
