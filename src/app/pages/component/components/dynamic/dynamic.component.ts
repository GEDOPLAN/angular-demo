import { Component, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { ColorfullComponent } from '../../../template/colorfull/colorfull.component';


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.less']
})
export class DynamicComponent {

  @ViewChild('dynContent', { read: ViewContainerRef })
  dynContent: ViewContainerRef;

  colorFullComponentFactory: ComponentFactory<ColorfullComponent>

  constructor(cfr: ComponentFactoryResolver) {
    this.colorFullComponentFactory = cfr.resolveComponentFactory(ColorfullComponent)
  }

  add() {
    let btn: ComponentRef<ColorfullComponent> = this.dynContent.createComponent(this.colorFullComponentFactory);
    btn.instance.rgbaString = '255,150,50';
    btn.instance.ngOnChanges();
  }

  move() {
    this.dynContent.move(this.dynContent.get(0), 1);

  }

  remove() {
    this.dynContent.remove(this.dynContent.length - 1);
  }

}
