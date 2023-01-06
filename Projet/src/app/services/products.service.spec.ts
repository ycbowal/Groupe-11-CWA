import { TestBed } from '@angular/core/testing';
import { Product } from '../model/product';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let prod : Product[] ; 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts', ()=>{
    expect(service.getProducts()).toBeTruthy() ; 
  }) ; 

  // it('set products',()=>{
  //   expect(service.LP(prod)).toBeTruthy() ; 
  // }) ; 

});
