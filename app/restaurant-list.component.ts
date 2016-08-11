import { Component } from 'angular2/core';
import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent],
  template: `
    <table class='table'>
      <caption>Mmm restaurants</caption>
      <tr class='restaurant-display'
        *ngFor="#currentRestaurant of restaurantList"
        [restaurant]="currentRestaurant">
      </tr>
    </table>
  `
})
export class RestaurantListComponent{
  public restaurantList: Restaurant[];
}
