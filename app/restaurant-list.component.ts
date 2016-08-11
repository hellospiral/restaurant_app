import { Component } from 'angular2/core';
import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from './restaurant.model';
import { RestaurantDetailsComponent} from './restaurant-details.component';
import { RestaurantNewComponent } from './restaurant-new.component';
import { SpecialtyPipe } from './specialty.pipe';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  directives: [RestaurantComponent, RestaurantDetailsComponent, RestaurantNewComponent],
  pipes: [SpecialtyPipe],
  template: `
    <div class="col-xs-12">
      <h2>What do you want to eat?</h2>
      <select (change)="onChange($event.target.value)" class="form-control">
        <option value="Fast Food">Fast Food</option>
        <option value="Diner">Diner</option>
        <option value="Show All">Show All</option>
      </select>
      <div class="col-xs-12">
        <p class='restaurant-display'
          (click)="restaurantWasSelected(currentRestaurant)"
          *ngFor="#currentRestaurant of restaurantList | speciality:selectedSpecialty"
          [restaurant]="currentRestaurant">
        </p>
        <restaurant-details
          *ngIf="selectedRestaurant"
          [restaurant]="selectedRestaurant"
          (mouseleave)="restaurantGoAway(selectedRestaurant)">
        </restaurant-details>
        <new-restaurant
          (newRestaurant)= "createRestaurant($event)">
        </new-restaurant>
      </div>
    </div>
  `
})
export class RestaurantListComponent{
  public expand: boolean = false;
  public restaurantList: Restaurant[];
  public selectedRestaurant: Restaurant;
  public selectedSpecialty: string = "Show All";
  restaurantWasSelected(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
  }
  onChange(optionFromMenu) {
    this.selectedSpecialty = optionFromMenu;
  }
  restaurantGoAway(currentRestaurant: Restaurant) {
    this.selectedRestaurant = undefined;
  }
  createRestaurant(args :string[]): void {
    this.restaurantList.push(
      new Restaurant(args[0],args[1],args[2],args[3], this.restaurantList.length, [])
    );
  }
}
