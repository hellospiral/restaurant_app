import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'new-restaurant',
  outputs: ['newRestaurant'],
  template: `
  <form class="form-control">
    <input #newName placeholder="Name" class="col-sm-8 input-lg form-control" type="text">
    <input #newType placeholder="Type" class="col-sm-8 input-lg form-control" type="text">
    <input #newAddress placeholder="Address" class="col-sm-8 input-lg form-control" type="text">
    <input #newPrice placeholder="Price" class="col-sm-8 input-lg form-control" type="text">
    <button (click)="onSubmitNewRestaurant(newName, newType, newAddress, newPrice)" class="btn-success btn-lg">Add</button>
  </form>
  `
})
export class RestaurantNewComponent {
  public newRestaurant: EventEmitter<string[]>;
  constructor(){
    this.newRestaurant = new EventEmitter();
  }
  onSubmitNewRestaurant(userName: HTMLInputElement, userType: HTMLInputElement, userAddress: HTMLInputElement, userPrice: HTMLInputElement) {
    this.newRestaurant.emit([userName.value, userType.value, userAddress.value, userPrice.value]);
    userName.value="";
    userType.value="";
    userAddress.value="";
    userPrice.value="";
  }

}
