import { Component, OnInit, EventEmitter, Input, ChangeDetectionStrategy, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-change-me-push',
  templateUrl: './change-me.component.html',
  styleUrls: ['./change-me.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeMeComponentOnPush implements OnInit, AfterViewChecked {

  @Input()
  entry: Entry;

  public timesChecked:number=0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() { //derzeit Bug, wird trotzdem aufgerufen: https://github.com/angular/angular/issues/7055
    this.timesChecked=this.timesChecked+1;
    console.log("View Checked for 'push', Count: " + this.timesChecked);
  }
}

export class Entry {
  name: string;
  text: string;
}
