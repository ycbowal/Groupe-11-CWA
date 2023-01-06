import {getTestBed, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NgForm} from "@angular/forms";
import {AppComponent} from './app.component';
import {SignInComponent} from "./vue/sign-in/sign-in.component";
import {LogInComponent} from "./vue/log-in/log-in.component";
import {ProductListComponent} from "./vue/product-list/product-list.component";
import {HeaderComponent} from "./vue/header/header.component";
import {Basket} from "./model/basket";
import {BasketProduct} from "./model/basket-product";
import {ClientProduct} from "./model/client-product";
import {Product} from "./model/product";
import {Client} from "./model/client";
import {MockClients} from "./model/mockClients";
import {ProductSheetComponent} from "./vue/product-sheet/product-sheet.component";
import {MinHeaderComponent} from "./vue/min-header/min-header.component";
import {BasketComponent} from "./vue/basket/basket.component";
import {LandingPageComponent} from "./vue/landing-page/landing-page.component";
import {lastValueFrom, single} from "rxjs";
import {SingleProductComponent} from "./vue/single-product/single-product.component";
import { BasketproductsService } from './services/basketproducts.service';
import ProductJson from "../assets/MockProducts/products.json" ; 
import { SearchComponent } from './vue/search/search.component';

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

describe('AppComponent', () => {

  let sign: SignInComponent;
  let login: LogInComponent;
  let product: ProductListComponent;
  let head: HeaderComponent;
  let prodbasket: Basket;
  let bp: BasketProduct;
  let cp: ClientProduct;
  let p: Product;
  let c: Client;
  let b: Basket;
  let userform: NgForm;
  let bs : BasketproductsService ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SignInComponent,
        LogInComponent,
        ProductSheetComponent,
        ProductListComponent
      ],
    }).compileComponents();
  });


  it('panier service etat de marche' , ()=>{
    const fixture = TestBed.createComponent(BasketproductsService) ;
    const bs = fixture.componentInstance;
    //const bs = new BasketproductsService() ;
    bs.ngOnInit() ;
    const prod : PRODUCTJSON[] = ProductJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ; 

    const cp = new ClientProduct(p ,false )  ;
    // tester toutes les fonctions du services
    expect(bs.addToBasket(cp)).toBeTruthy() ;
    expect(bs.deleteDirectlyFrombasket(cp)).toBeTruthy() ;
    bs.addToBasket(cp) ;
    expect(bs.deleteFrombasket(cp)).toBeTruthy() ;
    bs.addToBasket(cp) ;
    expect(bs.totalamount()).toEqual(p.realPrice) ;
  }) ;

  it('barre de recherche' , ()=>{
    const fixture = TestBed.createComponent(SearchComponent) ; 
    const app = fixture.componentInstance ; 
    app.ngOnInit(); 
    app.getProductByName() ; 

    expect(app).toBeTruthy() ; 
  }) ; 

  //--------------------------- test unitaire-----------------------
  //
  // Panier
  //
  it('panier test unitaires', () => {
    const fixture = TestBed.createComponent(BasketComponent);
    const app = fixture.componentInstance;

    const prod : PRODUCTJSON[] = ProductJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ; 
    const cp = new ClientProduct(p, false);
    expect(prodbasket.totalAmount() == 0).toBeFalse();
  });

  it('click sur la fermeture panier supprime tous les produits', ()=>{
    const fixture = TestBed.createComponent(BasketComponent) ; 
    const app = fixture.componentInstance ; 
    const prod : PRODUCTJSON[] = ProductJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ; 
    const p1 = new Product(prod[1].relativePrice , prod[1].id, prod[1].name , prod[1].description, prod[1].realPrice , prod[1].totalNbCopies, prod[1].urlMainImage , prod[1].isAvailable) ; 

    app.ngOnInit() ; 
    const cp = new ClientProduct(p, false) ; 
    const cp2 = new ClientProduct(p1,false) ; 
    app.addToBasket(cp) ;    
    app.addToBasket(cp2) ; 
    app.refresh() ; 
    app.removeDirectlyFromBasket(cp) ; 
    app.removeDirectlyFromBasket(cp2) ; 

    expect(app.BasketProducts.length).toEqual(0) ; 
  }) ; 

  
  it('product-sheet',()=>{
    const fixture = TestBed.createComponent(ProductSheetComponent) ; 
    const app = fixture.componentInstance ; 
    app.ngOnInit(); 

    expect(app).toBeTruthy() ;
  }) ; 

  // Commande 

  it('le header doit avoir le nom du client connecter', ()=>{
    const fixture = TestBed.createComponent(LogInComponent) ;
    const app = fixture.componentInstance ;
    
    const prod : PRODUCTJSON[] = ProductJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ; 

    app.identifier = c.identifier ;
    app.password = c.password ;
    userform.value.identifier = app.identifier ;
    userform.value.password = app.password ;
    app.onLogIn(userform) ;
    fixture.detectChanges() ;

    const fixture2 = TestBed.createComponent(HeaderComponent) ;
    const app2 = fixture2.componentInstance ;
    fixture2.detectChanges() ;

    expect(app2.firstName).toEqual(c.lastName) ;
    expect(app2.lastName).toEqual(c.firstName) ;

  })


  // -----------------------test d'acceptation------------------------
  // it('recherche dun produit sur le site', ()=>{
  //   const fixture = TestBed.createComponent(MinHeaderComponent)  ;
  //   const app = fixture.componentInstance ;
  //   expect(app).toBeTruthy();

  // }) ;
  it('single product component' , ()=>{
    const fixture = TestBed.createComponent(SingleProductComponent) ;
    const app = fixture.componentInstance ;

    fixture.detectChanges() ;
    expect(app).toBeTruthy() ;
  })
  it('Panier', () => {
    const prodbasket = new Basket();
    //const p = new Product("1","huawei","----",500,2,"/assets/Products/HUAWEI.avif",[],"SMARTPHONE",[],0,true,0,true) ;
     const prod : PRODUCTJSON[] = ProductJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ; 
    const cp = new ClientProduct(p, false);
    //const bp = new BasketProduct(cp) ;
    prodbasket.addToBasket(cp);
    expect(prodbasket.totalAmount()).toEqual(p.realPrice);
  });
  // panier OK

  it('Inscription Utilisateur', () => {
    c = MockClients[0];
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.componentInstance;
    //app.ngOnInit() ;
    app.identifier?.setValue(c.identifier)
    app.password?.setValue(c.password);
    app.retypedPassword?.setValue(c.password);
    app.lastName?.setValue(c.lastName);
    app.firstName?.setValue(c.firstName);
    app.onSignIn() ;
    expect(app.isAlreadyRegistered).toEqual(true) ;
  });

  it('Connexion Utilisateur', () => {
    c = MockClients[0];
    userform.value.identifier = c.identifier;
    userform.value.password = c.password;
    const fixture = TestBed.createComponent(LogInComponent);
    const app = fixture.componentInstance;
    app.onLogIn(userform);
    expect(login.isNotRegistered).toEqual(true);
  });

  // it('Filtrage des listes des nouveaux produits', () => {
  //   const fixture = TestBed.createComponent(ProductListComponent);
  //   const app = fixture.componentInstance;
  //   app.ngOnInit() ;
  //   app.Etat = 'Nouveau';
  //   app.getProductByEtat();
  //   expect(app.flagEtat).toEqual(true);
  // });


  // it('Filtrage des listes des produits doccasion', () => {
  //   const fixture = TestBed.createComponent(ProductListComponent);
  //   const app = fixture.componentInstance;
  //   app.ngOnInit() ;
  //   app.Etat = 'Occasion';
  //   app.getProductByEtat();
  //   expect(app.flagEtat).toEqual(true);
  // });

  it('Avoir un produit par le nom du produit' , ()=>{
    const fix = TestBed.createComponent(ProductListComponent)  ;
    const app = fix.componentInstance ;
    app.ngOnInit() ;
    // a revoir le test
    expect(app).toBeTruthy() ;
  });

  
  // it('Avoir un produits par son nom', () => {
  //   const fixture = TestBed.createComponent(ProductListComponent);
  //   const app = fixture.componentInstance;
  //   app.getProductByName("ASUS");
  //   expect(app.ProductsList[0].name).toEqual("ASUS")  ;
  // });

  it('creation Min-header', () => {
    const fixture = TestBed.createComponent(MinHeaderComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it('supprimer un produit dans le panier', () => {
    const fixture = TestBed.createComponent(BasketComponent);
    const app = fixture.componentInstance;
    //const p = new Product("1","huawei","----",500,2,"/assets/Products/HUAWEI.avif",[],"SMARTPHONE",[],0,true,0,true) ;
    const prod : PRODUCTJSON[] = ProductJson ; 
    const p = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ; 
    const cp = new ClientProduct(p, false);
    //const bp = new BasketProduct(cp) ;
    app.addToBasket(cp);
    app.removeFromBasket(cp);
    expect(app.getTotal()).toEqual(0);
  });

  it('creation de header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it('create landing-page', () => {

    const fixture = TestBed.createComponent(LandingPageComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    expect(app).toBeTruthy();

  });

  it('creation du panier', () => {
    const fixture = TestBed.createComponent(BasketComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });

  it('panier doit être plein(le client peut mettre autant de produit donc ce qui fait que le contenu du panier na pas de limite)', () => {
    const fixture = TestBed.createComponent(BasketComponent);
    const app = fixture.componentInstance;
    const prod : PRODUCTJSON[] = ProductJson ; 

    const p1 = new Product(prod[0].relativePrice , prod[0].id, prod[0].name , prod[0].description, prod[0].realPrice , prod[0].totalNbCopies, prod[0].urlMainImage , prod[0].isAvailable) ; 
    const p2 = new Product(prod[1].relativePrice , prod[1].id, prod[1].name , prod[1].description, prod[1].realPrice , prod[1].totalNbCopies, prod[1].urlMainImage , prod[1].isAvailable) ; 
    const p3 = new Product(prod[2].relativePrice , prod[2].id, prod[2].name , prod[2].description, prod[2].realPrice , prod[2].totalNbCopies, prod[2].urlMainImage , prod[2].isAvailable) ; 


    const cp1 = new ClientProduct(p1, false);
    const cp2 = new ClientProduct(p2, false);
    const cp3 = new ClientProduct(p3, false);
    app.addToBasket(cp1);
    app.addToBasket(cp2);
    app.addToBasket(cp3);
    const sum_realprice = p1.realPrice + p2.realPrice + p3.realPrice;
    expect(app.getTotal()).toEqual(sum_realprice);
  });


});
