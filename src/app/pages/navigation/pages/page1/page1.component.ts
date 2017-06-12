import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {

  input: string;

  message: string;

  constructor(route: ActivatedRoute) {
    this.message = route.snapshot.data['message'];
  }

  ngOnInit() {
  }

  canLeave() {
    return this.input && this.input.length > 0;
  }

}
