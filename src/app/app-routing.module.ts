import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/products-list', pathMatch: 'full' },
  { path: 'products-list', component: ProductsListComponent },
  { path: 'products-list/:id', component: ProductItemDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-confirm', component: OrderConfirmComponent },
  { path: '**', redirectTo: '/products-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
