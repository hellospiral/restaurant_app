import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: '.restaurant-display',
  inputs: ['restaurant'],
  template: `
    <p>{{ restaurant.name }}</p>
  `
})

export class RestaurantComponent {
  public restaurant: Restaurant;

}
