import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css'],
})
export class OrderConfirmComponent implements OnInit {
  fullName: string = '';
  totalPrice: number = 0;
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    const index: number = this.orderService.orderList.length - 1;
    this.fullName = this.orderService.orderList[index].fullName;
    this.totalPrice = this.orderService.orderList[index].totalPrice;
  }
}
