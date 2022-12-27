import { Basket } from '../model/basket';
import { ClientProduct } from '../model/client-product';
import { BasketProduct } from '../model/basket-product';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BasketproductsService implements OnInit {
  basket!: Basket;
  constructor() {
    this.basket = new Basket();
  }
  ngOnInit(): void {
    this.getLBasketProducts();
  }

  getLBasketProducts(): Observable<BasketProduct[]> {
    return of(this.basket._products);
  }

  addToBasket(product: ClientProduct) {
    this.basket.addToBasket(product);
    console.info(this.basket._products);
  }
  deleteFrombasket(product: ClientProduct) {
    this.basket.deleteFromBasket(new BasketProduct(product));
  }
  deleteDirectlyFrombasket(product: ClientProduct) {
    this.basket.deleteDirectlyFromBasket(new BasketProduct(product));
  }

  totalamount(): number {
    return this.basket.totalAmount();
  }
}
