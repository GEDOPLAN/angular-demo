import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private sourceLink;

  public setSourceLink(path:string){
    this.sourceLink="https://github.com/GEDOPLAN/angular-demo/tree/master" + path;
  }
}
