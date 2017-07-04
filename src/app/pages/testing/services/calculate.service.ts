import { Injectable } from '@angular/core';

@Injectable()
export class CalculateService {

  constructor() { }

  public addSomeValues(base: number, ...add: number[]) {
    return add.reduce((prev, current) => prev + current, base);
  }

}
