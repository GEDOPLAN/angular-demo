import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class ErrorHandleService implements ErrorHandler{

  handleError(error) {
    console.log("Oh no, a error occure: " + error);
    throw error;
  }
}
