import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';

import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './products-list/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CheckoutFormComponent } from './cart/checkout-form/checkout-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    OrderConfirmComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    CartListComponent,
    CheckoutFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
