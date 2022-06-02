import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  @Input() item: Product;
  constructor() {
    this.item = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {}
  onSubmit() {}
}
