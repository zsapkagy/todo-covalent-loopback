import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): Number {
    return value.length;
  }

}
