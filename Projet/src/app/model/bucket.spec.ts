import { Basket } from './basket';
import ProdJson from "../../assets/MockProducts/products.json" ; 
import { Product } from './product';
import { Client } from './client';
import { ClientProduct } from './client-product';
import { BasketProduct } from './basket-product';


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

describe('Bucket', () => {
  it('should create an instance', () => {
    expect(new Basket()).toBeTruthy();
  });

  it('pouvoir ajouter un produit',()=>{
    const basket = new Basket() ; 
    const prod : PRODUCTJSON[] = ProdJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ;  
    const cp = new ClientProduct(p , false) ; 
    expect(basket.addToBasket(cp)).toBeTruthy() ;  
  }) ; 

  it('pouvoir supprimer un produit',()=>{
    const basket = new Basket() ; 
    const prod : PRODUCTJSON[] = ProdJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ;  
    const cp = new ClientProduct(p , false) ; 
    const basketp = new BasketProduct(cp) ; 
    basket.addToBasket(cp) ;
    expect(basket.deleteFromBasket(basketp)).toBeTruthy(); 
  }); 

  it('pouvoir supprimer directement un produit',()=>{
    const basket = new Basket() ; 
    const prod : PRODUCTJSON[] = ProdJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ;  
    const cp = new ClientProduct(p , false) ; 
    const basketp = new BasketProduct(cp) ; 
    basket.addToBasket(cp) ;
    expect(basket.deleteDirectlyFromBasket(basketp)).toBeTruthy() ; 
  }); 

  it('pouvoir supprimer directement un produit',()=>{
    const basket = new Basket() ; 
    const prod : PRODUCTJSON[] = ProdJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ;  
    const cp = new ClientProduct(p , false) ; 
    const basketp = new BasketProduct(cp) ; 
    basket.addToBasket(cp) ;
    expect(basket.deleteDirectlyFromBasket(basketp)).toBeTruthy() ; 
  }); 
  
  it('avoir la somme du panier',()=>{
    const basket = new Basket() ; 
    const prod : PRODUCTJSON[] = ProdJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ;  
    const cp = new ClientProduct(p , false) ; 
    const basketp = new BasketProduct(cp) ; 
    basket.addToBasket(cp) ;
    expect(basket.totalAmount()).toEqual(p.realPrice) ; 
  }); 

  
  
});
