import { Component, OnInit } from '@angular/core';
import { SourceLinkServiceService } from '../../services/source-link-service.service';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.less'],
  providers: [SourceLinkServiceService]
})
export class I18nComponent implements OnInit {

  constructor(src: SourceLinkServiceService) {
    src.setSourceLink('/src/app/template');
  }

  ngOnInit() {
  }

}
