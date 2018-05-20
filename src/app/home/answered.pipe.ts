import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'answered',
  pure: false
})
export class AnsweredPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.answered === false);
}

}
