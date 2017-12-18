import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term: any): any {
    let flatArray = _.flatMap(items);
    let result;

    switch (term) {
      case 'Best selling (dafault)':
        result = _.sortBy(flatArray, [function(o: any) { return o.id }]);
        break;

      case 'Price (low-high)':
        result = _.sortBy(flatArray, function(o: any) { return o.price });
        break;

      case 'Price (high-low)':
        result = _.reverse(_.sortBy(flatArray, function(o: any) { return o.price }));
        break;

      case 'Name (A-Z)':
        result = _.sortBy(flatArray, function(o: any) { return o.name });
        break;

        default: result = flatArray;
    }

    return _.chunk(result, 4);
  }
}
