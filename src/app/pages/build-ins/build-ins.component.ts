import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../../services/source-link-service.service';
import { Observable } from 'rxjs/Rx';
import {DecimalPipe} from '@angular/common';

import 'rxjs/Rx';

@Component({
  selector: 'app-build-ins',
  templateUrl: './build-ins.component.html',
  styleUrls: ['./build-ins.component.less']
})
export class BuildInsComponent implements OnInit {

  colorRed: string = "red";

  d: Date = new Date();

  obs: Observable<string>;

  elements: string[] = [
    'Hello',
    'World',
    '!'
  ];

  constructor(src: SourceLinkServiceService) {
    src.setSourceLink('/src/app/build-ins');
  }

  ngOnInit() {
    this.obs = Observable.from(['HelloWorld']).delay(5000);

    //Pipes in Komponente verwenden
    console.log(new DecimalPipe('de-de').transform(100, '2.2-2'));
  }

}
