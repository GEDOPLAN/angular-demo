import { Component } from '@angular/core';
import {SourceLinkServiceService} from './services/source-link-service.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

constructor( public src:SourceLinkServiceService){}
}
