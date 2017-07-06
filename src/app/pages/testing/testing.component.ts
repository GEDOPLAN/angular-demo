import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../../services/source-link-service.service';

import { HttpService } from './services/http.service';
import { CalculateService } from './services/calculate.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.less']
})
export class TestingComponent implements OnInit {

  public users: any[];

  public baseNumber: number = 0;

  public resultNumber: number;

  constructor(src: SourceLinkServiceService, private httpService: HttpService, private calculateService: CalculateService) {
    src.setSourceLink('/src/app/http');
  }

  ngOnInit() {
    this.httpService.get().subscribe(r => {
      console.log('JSON Length: ' + r.length);
      this.users = r;
    });
  }

  add10() {
    this.resultNumber = this.calculateService.addSomeValues(this.baseNumber, 10);
  }


}
