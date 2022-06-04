import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/Model/CartItem';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  @Input() item: CartItem;
  @Output() updatedList: EventEmitter<CartItem> = new EventEmitter();
  constructor(private cartService: CartService) {
    this.item = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      quantity: 1,
    };
  }

  ngOnInit(): void {}
  onUpdate(item: CartItem) {
    this.cartService.updateCart(item);
    this.updatedList.emit();
    alert(`
      The item has been updated!
        item: ${item.name}
        quantity: ${item.quantity}
    `);
  }
  onDelete(item: CartItem) {
    this.cartService.deleteItem(item);
    this.updatedList.emit();
    alert(`
      The item has been deleted!
        item: ${item.name}
        quantity: ${item.quantity}
    `);
  }
}
