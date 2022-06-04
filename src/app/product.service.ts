import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from './Model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  dataUrl = 'assets/data.json';
  productList: Product[] = [];
  selectedProduct: Product;

  constructor(private http: HttpClient) {
    this.selectedProduct = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  getProducts(): Observable<[]> {
    return this.http.get<[]>(this.dataUrl);
  }

  // getProduct(id: number) {
  //   this.getProducts().subscribe((data) => {
  //     this.productList = data;
  //     console.log('subscrpition started here');
  //   });
  //   console.log(this.productList, 'product List info');
  //   return this.productList.filter((el) => el.id === id)[0];
  // }
}
