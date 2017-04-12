import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../services/source-link-service.service';

@Component({
  selector: 'app-direktive',
  templateUrl: './direktive.component.html',
  styleUrls: ['./direktive.component.less']
})
export class DirektiveComponent implements OnInit {

  constructor(src: SourceLinkServiceService) {
    src.setSourceLink('/src/app/direktive');
  }
  ngOnInit() {
  }

}
