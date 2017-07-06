import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldServiceShared {

  public callCount: number = 0;

  constructor() { 
    console.log('Constructed');
  }

  public helloWorld(): string {
    this.callCount++;
    return 'Hello World';
  }
}
