import { Component, trigger, transition, animate, style } from '@angular/core';
import {SourceLinkServiceService} from './services/source-link-service.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
   animations: [trigger(
    'openClose',
    [
      transition(":enter", [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate('2000ms', style({ opacity: 0 }))
      ])
    ])]
})
export class AppComponent {

constructor( public src:SourceLinkServiceService){}
}
