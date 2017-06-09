import { Component, OnInit, OpaqueToken, Inject } from '@angular/core';

import { DemoService } from './components/demo.service';

export const demotoken = new OpaqueToken('DEMO-TOKEN');
export const demotokenFactory = new OpaqueToken('DEMO-TOKEN-FACTORY');
export const demotokenValue = new OpaqueToken('DEMO-TOKEN-VALUE');
export const demotokenAlias = new OpaqueToken('DEMO-TOKEN-ALIAS');

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.less'],
  providers: [
    DemoService,
    { provide: DemoService, useClass: DemoService },
    { provide: demotoken, useClass: DemoService },
    { provide: demotokenFactory, useFactory: () => { return new DemoService() } },
    { provide: demotokenValue, useValue: 'test' },
    { provide: demotokenAlias, useExisting: DemoService }
  ]
})
export class DiComponent implements OnInit {

  constructor(
    public demoService: DemoService,
    @Inject(demotoken) public demoServiceByToken: DemoService,
    @Inject(demotokenFactory) public demoServiceByFactory: DemoService,
    @Inject(demotokenValue) public demoByValue: string,
    @Inject(demotokenAlias) public demoServiceByAlias: DemoService,
  ) {
    demoService.message = 'I am the Parent !';
  }

  ngOnInit() {
  }

  public getDemoObjects(): any[] {
    return Object.keys(this).filter(e => e.startsWith('demo')).map(key => this[key]);
  }

}
