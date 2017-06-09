import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.less']
})
export class Page2Component implements OnInit {

  text: string;

  constructor(route: ActivatedRoute) {
    route.params.subscribe( params => this.text=params['text']);
  }

  ngOnInit() {
  }

}
