import {Component} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'restaurant-details',
  inputs: ['restaurant'],
  template: `
  <h4>Type: {{ restaurant.specialty }}</h4>
  <h4>Address: {{ restaurant.address }}</h4>
  <h4>Price: {{ restaurant.price }}</h4>
  <h4>Average rating: {{ restaurant.averageRating(restaurant.points) }} </h4>
  <hr>
  <h4>Add a new rating:</h4>
  <select #ratingCategory class="form-control" >
    <option value=1>1</option>
    <option value=2>2</option>
    <option value=3>3</option>
    <option value=4>4</option>
    <option value=5>5</option>
  </select>
  <button (click)="addRating(ratingCategory.value)" class="btn btn-info" >Add Rating</button>
  `
})
export class RestaurantDetailsComponent {
  public restaurant: Restaurant;
  addRating(rating: string) {
    this.restaurant.points.push(parseInt(rating));
    console.log(this.restaurant.points)
  }
}
