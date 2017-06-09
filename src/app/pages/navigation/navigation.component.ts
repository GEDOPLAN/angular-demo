import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SourceLinkServiceService } from '../../services/source-link-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  pq: any;

  pm: any;


  constructor(src: SourceLinkServiceService, route: ActivatedRoute) {
    src.setSourceLink('/src/app/model-driven');

    route.params.subscribe(p => this.pm = p);
    route.queryParams.subscribe(p => this.pq = p);

  }

  ngOnInit() {
  }

}
