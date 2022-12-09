import { Injectable, OnInit } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { MockProducts } from '../model/mockProducts';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {
  constructor(){}
  Products:Product[]=MockProducts;
  ngOnInit(): void { this.getProducts()};
  getProducts(): Observable<Product[]>{   
     return of(this.Products); 
  }
 set LP(ProductS:Product[]){this.Products=ProductS;}
}
