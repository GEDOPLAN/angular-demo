import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../../services/source-link-service.service';

import { HttpService } from './services/http.service';
import { CalculateService } from './services/calculate.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.less'],
  providers: [
    HttpService, CalculateService
  ]
})
export class TestingComponent implements OnInit {

  private users: any[];

  constructor(private httpService: HttpService, private calculateService: CalculateService) {
  }

  ngOnInit() {
    this.httpService.get().subscribe(r => {
      console.log('JSON Length: ' + r.length);
      this.users = r;
    });
  }
}
