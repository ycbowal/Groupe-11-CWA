import { BasketProduct } from './basket-product';
import { ClientProduct } from './client-product';
import { Product } from './product';
import ProdJson from "../../assets/MockProducts/products.json" ; 


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

describe('BucketProduct', () => {
  it('should create an instance', () => {
    
    const prod : PRODUCTJSON[] = ProdJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ;  
    const cp = new ClientProduct(p, false) ; 
    const bucketProduct = new BasketProduct(cp);
    expect(bucketProduct).toBeTruthy();
  });
});
