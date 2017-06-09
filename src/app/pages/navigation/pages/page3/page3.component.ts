import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.less']
})
export class Page3Component implements OnInit {

  params: any;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.params = params;
    });
  }

  ngOnInit() {
  }

}
