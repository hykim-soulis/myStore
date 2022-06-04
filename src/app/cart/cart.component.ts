import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { CartItem } from '../Model/CartItem';
import { Order } from '../Model/Order';
import { OrderService } from '../order.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number;
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {
    this.totalPrice = 0;
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  getOrder(userInfo: {
    fullName: string;
    address: string;
    creditCard: string;
  }) {
    this.fullName = userInfo.fullName;
    this.address = userInfo.address;
    this.creditCard = userInfo.creditCard;

    const newOrder: Order = {
      fullName: this.fullName,
      address: this.address,
      creditCard: this.creditCard,
      totalPrice: this.totalPrice,
      products: this.cartItems,
    };
    this.orderService.addOrder(newOrder);
  }

  updateTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
