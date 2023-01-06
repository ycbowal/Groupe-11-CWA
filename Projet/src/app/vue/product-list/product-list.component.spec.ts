import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { Product } from 'src/app/model/product'; 
import ProductJson from '../../../assets/MockProducts/products.json' ; 

interface PRODUCTJSON {
  relativePrice:  number ; 
  id : string ; 
  name : string ;
  description : string ; 
  realPrice : number ; 
  totalNbCopies : number ; 
  urlMainImage : string;  
  isAvailable : boolean ; 
}

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('favorite', () => {
    const prod : PRODUCTJSON[] = ProductJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ; 

    expect(component.onToggleFavorites(p)).toBeTruthy();
  });

  it('isfavorite', ()=>{
    const prod : PRODUCTJSON[] = ProductJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ; 
    component.onToggleFavorites(p) ; 

    expect(component.isFavorited(p.id)).toEqual(true)  ;
  }) ;
});
