import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CartItem} from '../../restaurant-detail/shopping-cart/cart-item.model'

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() items: CartItem[]

  @Output()increaseQtyL = new EventEmitter<CartItem>()
  @Output()decreaseQty = new EventEmitter<CartItem>()
  @Output()remove = new EventEmitter<CartItem>()


  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem) {
    this.increaseQtyL.emit(item)
  }

  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item)
  }

  emitRemoveQty(item: CartItem){
    this.remove.emit(item)
  }

}
