import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldServiceShared {

 constructor() { 
    console.log('Constructed');
  }

  public helloWorld(): string {
    return 'Hello World';
  }
}
