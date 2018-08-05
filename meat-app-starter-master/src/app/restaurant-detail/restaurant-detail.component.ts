import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../restaurants/restaurants.service'
import {Restaurant} from '../restaurants/restaurant.model'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

   restaurant: Restaurant
   //Realizar a injeçao da dependencia via Angular a classe Service deve ser @Injectable
  constructor(private restaurantsService: RestaurantService,
              private route:ActivatedRoute) { }

  //Método de inicializacao
  ngOnInit() {
    //Chamada do objeto service e subscribe(obj=>this.local = obj)
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant);
  }

}
