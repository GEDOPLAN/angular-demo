import { Component, OnInit, Input } from '@angular/core';

export class Customer {
  name: string;
  age: number;
  company: string;
}

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.less']
})
export class CustomerInfoComponent {

  @Input()
  customer: Customer;

  oldCustomerName: string;

  constructor() { }

  ngOnChanges() {
    console.log('ngOnChanges fired...');
    this.oldCustomerName = this.customer.name;
  }

  ngDoCheck() {
    if (this.customer.name !== this.oldCustomerName) {
      console.log('MyOwnChange-Detection');
      this.oldCustomerName=this.customer.name;
    } else {
      console.log("Umsonst gelaufen...");
    }
  }

}
