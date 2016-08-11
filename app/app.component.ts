import { Component } from 'angular2/core';
import { RestaurantListComponent } from './restaurant-list.component';
import {RestaurantComponent} from './restaurant.component';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <restaurant-list
      [restaurantList]="restaurants">
    </restaurant-list>
  `,
})
export class AppComponent {
  public restaurants: Restaurant[];
  constructor(){
    this.restaurants = [
      new Restaurant("McDonalds", "Fast Food", "1234 Main St", "$", 0, [4]),
      new Restaurant("Hard Rock Cafe", "Diner", "5555 Buck Ave", "$$", 1, [5])
    ];
  }
}
