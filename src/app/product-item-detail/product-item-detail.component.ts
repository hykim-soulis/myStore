import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../Model/CartItem';

import { Product } from '../Model/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  item: Product;
  id: number;
  quantity: number;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.item = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: '',
    };
    this.id = 1;
    this.quantity = 1;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.item = this.productService.selectedProduct;
    console.log(this.item, 'ngoninit');
  }

  addToCart(item: Product, quantity: number) {
    const goCartItem: CartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      url: item.url,
      quantity: quantity,
    };
    this.cartService.addToCart(goCartItem);
    alert(`
      The item has been added to your cart!
        item: ${item.name}
        quantity: ${quantity}
    `);
  }
}
