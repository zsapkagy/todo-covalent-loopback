import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityClass'
})
export class PriorityClassPipe implements PipeTransform {

  transform(priority: number, args?: any): string {
    switch (priority) {
      case 3:
        return 'tc-red-600';
      case 2:
        return 'tc-orange-600';
      case 1:
        return 'tc-yellow-600';
      case 0:
      default:
        return 'tc-green-600';
    }
  }

}
