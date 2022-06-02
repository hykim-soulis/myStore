import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() item: Product;
  constructor() {
    this.item = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {}

  onSubmit() {}
}
