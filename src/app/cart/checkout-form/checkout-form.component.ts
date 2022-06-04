import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  fullNameCheck: boolean | undefined;
  addressCheck: boolean | undefined;
  creditCardCheck: boolean | undefined;

  @Output() orderSubmit: EventEmitter<{
    fullName: string;
    address: string;
    creditCard: string;
  }> = new EventEmitter();
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  onSubmitForm() {}

  onSubmitOrder(fullName: string, address: string, creditCard: string) {
    this.orderSubmit.emit({ fullName, address, creditCard });
    this.cartService.clearCart();
  }

  checkFullName() {
    if (this.fullName.length < 3 && this.fullName.length > 0) {
      this.fullNameCheck = false;
    } else {
      this.fullNameCheck = true;
    }
  }
  checkAddress() {
    if (this.address.length < 6 && this.address.length > 0) {
      this.addressCheck = false;
    } else {
      this.addressCheck = true;
    }
  }
  checkCreditCardNumber(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 41 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  checkCreditCard() {
    if (this.creditCard.length < 16 && this.creditCard.length > 0) {
      this.creditCardCheck = false;
    } else {
      this.creditCardCheck = true;
    }
  }
}
