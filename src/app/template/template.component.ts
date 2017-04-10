import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.less']
})
export class TemplateComponent implements OnInit {

  value='Hello World';

  constructor(app:AppComponent) {
    app.setSourceLink('/src/app/template');
  }

  ngOnInit() {
  }


  change(){
    this.value=this.value +" - new";
  }
}
