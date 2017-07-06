import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../../services/source-link-service.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.less']
})
export class DirectiveComponent implements OnInit {

  error1: any;
  error2: any;

  constructor(src: SourceLinkServiceService) {
    src.setSourceLink('/src/app/directive');
  }
  ngOnInit() {
  }

  buttonclick() {
    console.log('click');
  }

}
