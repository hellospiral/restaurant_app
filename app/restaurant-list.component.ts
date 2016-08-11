import { Component } from 'angular2/core';
import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from './restaurant.model';
import { RestaurantDetailsComponent} from './restaurant-details.component';
import { SpecialtyPipe } from './specialty.pipe';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent, RestaurantDetailsComponent],
  pipes: [SpecialtyPipe],
  template: `
    <ul class="container list-group">
      <h2>Mmm restaurants</h2>
      <select (change)="onChange($event.target.value)" class="form-control">
        <option value="Fast Food">Fast Food</option>
        <option value="Diner">Diner</option>
        <option value="Show All">Show All</option>
      </select>
      <li class='restaurant-display list-group-item'
        (click)="restaurantWasSelected(currentRestaurant)"
        *ngFor="#currentRestaurant of restaurantList | speciality:selectedSpecialty"
        [restaurant]="currentRestaurant">
      </li>
      <restaurant-details *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></restaurant-details>
    </ul>
  `
})
export class RestaurantListComponent{
  public restaurantList: Restaurant[];
  public selectedRestaurant: Restaurant;
  public selectedSpecialty: string = "Fast Food";
  restaurantWasSelected(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
  }
  onChange(optionFromMenu) {
    this.selectedSpecialty = optionFromMenu;
  }
}
