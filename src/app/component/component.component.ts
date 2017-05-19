import { Component, OnInit, ViewChild} from '@angular/core';
import { VeEmulateComponent, VeNativeComponent, VeNoneComponent } from './components';


@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.less'],
  providers: [VeEmulateComponent, VeNativeComponent, VeNoneComponent]
})
export class ComponentComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
}
