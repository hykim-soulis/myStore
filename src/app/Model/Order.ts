import { CartItem } from './CartItem';

export class Order {
  fullName: string = '';
  address: string = '';
  creditCard: string = '';
  totalPrice: number = 0;
  products: CartItem[] = [];

  constructor() {}
}
