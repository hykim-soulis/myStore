import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { CartItem } from 'src/app/Model/CartItem';
import { Product } from 'src/app/Model/Product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() item: Product;
  quantity: number;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.item = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
    this.quantity = 1;
  }

  ngOnInit(): void {}

  goToProductDetail(item: Product) {
    this.productService.selectedProduct = item;
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
