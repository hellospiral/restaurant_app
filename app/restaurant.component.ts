import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: '.restaurant-display',
  inputs: ['restaurant'],
  template: `
    <td>{{ restaurant.name }}</td>
    <td>{{ restaurant.specialty }}</td>
    <td>{{ restaurant.address }}</td>
    <td>{{ restaurant.price }}</td>
  `
})

export class RestaurantComponent {
  public restaurant: Restaurant;

}
