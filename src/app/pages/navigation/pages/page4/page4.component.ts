import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.less']
})
export class Page4Component implements OnInit {

  params: any;

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      this.params = params;
    });
  }

  ngOnInit() {
  }

}
