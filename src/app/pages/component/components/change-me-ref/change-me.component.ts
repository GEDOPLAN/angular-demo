import { Component, OnInit, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-me-ref',
  templateUrl: './change-me.component.html',
  styleUrls: ['./change-me.component.less']
})
export class ChangeMeComponentRef implements OnInit {

  @Input()
  entry: Entry;

  attached: boolean = true;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.toggle();
  }

  toggle() {
    this.attached = !this.attached;
    if (!this.attached) {
      this.cdr.detach();
    }
    else {
      this.cdr.reattach();
      this.cdr.detectChanges();
    }
  }
}

export class Entry {
  name: string;
  text: string;
}
