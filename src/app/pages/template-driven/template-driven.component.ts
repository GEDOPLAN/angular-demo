import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SourceLinkServiceService } from '../../services/source-link-service.service';

export interface FormModel {
  name: string;
  age: number;
  mail: string
}


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.less']
})
export class TemplateDrivenComponent implements OnInit {

  formModel: FormModel;

  formModel2w = <FormModel>{};

  @ViewChild('namecss', {read: ElementRef})
  inputfield;

  constructor(src: SourceLinkServiceService) {
    src.setSourceLink('/src/app/template-driven');
  }

  ngOnInit() {
  }

}
