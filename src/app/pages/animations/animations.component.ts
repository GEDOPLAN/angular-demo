import { Component, OnInit, trigger, state, transition, style, animate } from '@angular/core';
import { SourceLinkServiceService } from '../../services/source-link-service.service';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.less'],
  animations: [
    trigger('btnActive', [
      state('true', style({ border: '3px solid red', margin: '-3px' })),
      state('false', style({ border: 'none' })),
      transition('* => *', [
        animate('300ms')
      ])
    ]),
    trigger('btnActive2', [
      state('true', style({ backgroundPosition: '0 100%',  backgroundSize: '100% 200%', backgroundImage: 'linear-gradient(to bottom, red 50%, black 50%)' })),
      state('false', style({ backgroundSize: '100% 200%', backgroundImage: 'linear-gradient(to bottom, red 50%, black 50%)' })),
      transition('* => *', [
        animate('300ms')
      ])
    ]),
  ]
})
export class AnimationsComponent implements OnInit {

  activeBtn: string = 'none';

  constructor(src: SourceLinkServiceService) {
    src.setSourceLink('/src/app/animations');
  }

  ngOnInit() {
  }

}
