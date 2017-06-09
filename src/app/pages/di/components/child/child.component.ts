import { Component, OnInit, Inject, Self, Optional } from '@angular/core';

import { DemoService } from '../demo.service';
import { demotoken, demotokenValue, demotokenAlias } from '../../di.component';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
  providers: [
    { provide: demotokenValue, useValue: 'Komponente...' },
  ]
})
export class ChildComponent implements OnInit {

  constructor(
    public demoService: DemoService,
    @Inject(demotokenValue) public demoTokenString: string,
    @Inject(demotokenAlias) @Self() @Optional() public demoServiceAlias,
    @Inject('DEMO-TOKEN') public demoRoot:string,
  ) {

  }

  ngOnInit() {
  }

}
