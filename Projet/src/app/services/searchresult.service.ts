import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root',
})
export class SearchResultService implements OnInit {
  constructor() {}
  _Products!: Product[];
  ngOnInit(): void {
    this.getSearchProducts();
  }
  getSearchProducts(): Observable<Product[]> {
    return of(this._Products);
  }
  set Products(ProductS: any[]) {
    this._Products = ProductS;
  }
  get GetProducts() {
    return this._Products;
  }
}
