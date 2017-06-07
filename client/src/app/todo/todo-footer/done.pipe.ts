import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from "app/shared/sdk";

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(value: Array<Todo>, args?: any): Array<Todo> {
    return value.filter((item) => {
      return item.done;
    });
  }

}
