import { Component, OnInit, Input } from '@angular/core';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-add10',
  templateUrl: './add10.component.html',
  styleUrls: ['./add10.component.less'],
  providers: [CalculateService]
})
export class Add10Component implements OnInit {

  constructor(private calculateService: CalculateService) { }

  @Input()
  base: number;

  result: number;

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.base) {
      this.result = this.calculateService.addSomeValues(this.base, 10);
    }
  }

}
