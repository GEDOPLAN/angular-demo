import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let x= (args && args[0]) || 10;
    return value * x;
  }
}
