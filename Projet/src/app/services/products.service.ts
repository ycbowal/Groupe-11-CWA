import { Injectable, OnInit } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { Product } from '../model/product';
 import products from "../../assets/MockProducts/products.json"
@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {
  Products:Product[]=products;
  constructor( ){ }
  ngOnInit(): void {
   }

  getProducts(): Observable<Product[]>{   
     return of(this.Products); 
  }
  
  getData(){
    
  }
 set LP(ProductS:Product[]){this.Products=ProductS;}
}
