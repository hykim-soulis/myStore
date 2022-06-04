import { Injectable } from '@angular/core';
import { Order } from './Model/Order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orderList: Order[] = [];
  constructor() {}
  addOrder(order: Order) {
    this.orderList.push(order);
    console.log(this.orderList[0].fullName, this.orderList[0].totalPrice);
  }
}
