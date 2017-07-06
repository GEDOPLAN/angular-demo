import { Component, OnInit, ViewChild } from '@angular/core';
import { VeEmulateComponent, VeNativeComponent, VeNoneComponent } from './components';
import { SourceLinkServiceService } from '../../services/source-link-service.service';

import { Entry } from './components/change-me/change-me.component';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.less'],
  providers: [VeEmulateComponent, VeNativeComponent, VeNoneComponent]
})
export class ComponentComponent {

  entry: Entry = new Entry();
  entryPush: Entry = new Entry();
  hide = false;

  clear() {
    this.entry.name = "def";
    this.entry.text = "def";
  }

  clearPush() {
    this.entry = new Entry();
    this.entry.name = "def";
    this.entry.text = "def";
  }

  constructor(src: SourceLinkServiceService) {
    src.setSourceLink('/src/app/component');
  }

}
