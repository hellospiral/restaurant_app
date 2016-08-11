import { Component } from 'angular2/core';
import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from './restaurant.model';
import { RestaurantDetailsComponent} from './restaurant-details.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent, RestaurantDetailsComponent],
  template: `
    <ul class="container list-group">
      <h2>Mmm restaurants</h2>
      <li class='restaurant-display list-group-item'
        (click)="restaurantWasSelected(currentRestaurant)"
        *ngFor="#currentRestaurant of restaurantList"
        [restaurant]="currentRestaurant">
      </li>
      <restaurant-details *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></restaurant-details>
    </ul>
  `
})
export class RestaurantListComponent{
  public restaurantList: Restaurant[];
  public selectedRestaurant: Restaurant;
  restaurantWasSelected(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
  }
}
