import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../services/source-link-service.service';

@Component({
  selector: 'app-build-ins',
  templateUrl: './build-ins.component.html',
  styleUrls: ['./build-ins.component.less']
})
export class BuildInsComponent implements OnInit {

  colorRed:string="red";

  elements:string[]=[
    'Hello',
    'World',
    '!'
  ];

  constructor(src: SourceLinkServiceService) {
    src.setSourceLink('/src/app/build-ins');
  }

  ngOnInit() {
  }

}
