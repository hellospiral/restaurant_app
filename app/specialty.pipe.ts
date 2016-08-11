import { Pipe, PipeTransform } from 'angular2/core';
import { RestaurantListComponent } from './restaurant-list.component';
import { Restaurant } from './restaurant.model';

@Pipe({
  name: "speciality",
  pure: false
})

export class SpecialtyPipe implements PipeTransform {
  transform = function(input: Restaurant[], args) {
    var output: Restaurant[] = [];
    var filterChoice = args[0];
    for (var i = 0; i < input.length; i++) {
      if (input[i].specialty === filterChoice) {
        output.push(input[i]);
      }
      else {
        if (filterChoice === "Show All") {
          return input;
        }
      }
    }
    return output;
  }
}
