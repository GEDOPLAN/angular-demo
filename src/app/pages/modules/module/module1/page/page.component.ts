import { Component, OnInit } from '@angular/core';
import { HelloWorldServiceShared } from '../../module-shared/hello-world.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  constructor(private service: HelloWorldServiceShared) { }

  ngOnInit() {
  }

  getHello(): string {
    return this.service.helloWorld();
  }

  getCallCount():number {
    return this.service.callCount;
  }

}
