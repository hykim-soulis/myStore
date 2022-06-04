import { Injectable } from '@angular/core';
import { CartItem } from '../Model/CartItem';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: CartItem[] = [];
  totalPrice: number = 0;
  constructor() {}

  getCart() {
    return this.cartList;
  }

  addToCart(item: CartItem) {
    const idList = this.cartList.map((el) => el.id);
    if (idList.indexOf(item.id) >= 0) {
      this.cartList[idList.indexOf(item.id)].quantity += item.quantity;
    } else {
      this.cartList.push(item);
    }
    return this.cartList;
  }

  updateCart(item: CartItem) {
    const idList = this.cartList.map((el) => el.id);
    this.cartList[idList.indexOf(item.id)].quantity = item.quantity;
    this.totalPrice = this.getTotalPrice();
  }

  deleteItem(item: CartItem) {
    const index = this.cartList.map((el) => el.id).indexOf(item.id);
    this.cartList.splice(index, 1);
  }

  clearCart() {
    this.cartList = [];
    return this.cartList;
  }

  getTotalPrice(): number {
    return this.cartList.length > 0
      ? Math.round(
          this.cartList
            .map((el) => el.price * el.quantity)
            .reduce((a, b) => a + b) * 100
        ) / 100
      : 0;
  }
}
