import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-change-me',
  templateUrl: './change-me.component.html',
  styleUrls: ['./change-me.component.less']
})
export class ChangeMeComponent implements OnInit {

  @Input()
  entry: Entry;

  public timesChecked:number=0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.timesChecked=this.timesChecked+1;
    console.log("View Checked for 'default', Count: " + this.timesChecked);
  }

}

export class Entry {
  name: string;
  text: string;
}
