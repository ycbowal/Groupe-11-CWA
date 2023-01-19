
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { research } from './model/Reseach';
import { User } from './model/user';
import { OrderResultComponent } from './vue/order-result/order-result.component';
import { OrderComponent } from './vue/order/order.component';
import ProdJson from "../assets/MockProducts/products.json" ; 
import { SearchComponent } from './vue/searchByName/searchByName.component';
import { SearchResultService } from './services/searchresult.service';
import { SearchResultComponent } from './vue/basket/search-result/search-result.component';


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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Projet'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Projet');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Projet app is running!');
  });

  it('order',()=>{
    const fixture = TestBed.createComponent(OrderResultComponent); 
    const app = fixture.componentInstance ; 
    app.ngOnInit(); 
    expect(app).toBeTruthy() ; 
  }); 
  it('order gotoOrderValidpage', ()=>{
    const fixture = TestBed.createComponent(OrderComponent) ;
    const app = fixture.componentInstance ; 
    app.ngOnInit() ; 
    expect(app.gotoOrderValidpage()).toBeTruthy(); 
  }); 
  it('order createForm',  ()=>{
    const fixture = TestBed.createComponent(OrderComponent) ;
    const app = fixture.componentInstance ; 
    app.ngOnInit(); 
    expect(app.createForm()).toBeTruthy(); 
  }) ; 

  it('Research testNames',()=>{
    const re = new research(); 
    expect(re.testNames("Asus", "Asus")).toEqual(true) ; 
  }); 
  it('Research getProductByname', ()=>{
    const re = new research(); 
    const prod : PRODUCTJSON[] = ProdJson ; 
    expect(re.getProductByname("iphone-11-128go-black",prod)).toBeTruthy() ; 
  }); 

  it('search component getproductByName',()=>{ 
    const fixture = TestBed.createComponent(SearchComponent) ;
    const app = fixture.componentInstance ; 
    app.ngOnInit(); 
    expect(app.getProductByName()).toBeTruthy(); 
  }); 

  it('search component create',()=>{
    const fixture = TestBed.createComponent(OrderComponent) ;
    const app = fixture.componentInstance ; 
    app.ngOnInit(); 
    expect(app).toBeTruthy(); 
  }) ; 
  it('order result component create',()=>{
    const fixture = TestBed.createComponent(OrderResultComponent) ;
    const app = fixture.componentInstance ; 
    app.ngOnInit(); 
    expect(app).toBeTruthy(); 
  }) ;

  it('search result service' ,()=>{
    const fixture = TestBed.createComponent(SearchResultService) ; 
    const app = fixture.componentInstance ; 
    expect(app).toBeTruthy(); 
  });
  it('search service getproducts', ()=>{
    const fixture = TestBed.createComponent(SearchResultService) ; 
    const app = fixture.componentInstance ; 
    expect(app.getSearchProducts()).toBeTruthy();
  }) ; 
  it('search result', ()=>{
    const fixture = TestBed.createComponent(SearchResultComponent) ; 
    const app = fixture.componentInstance ; 
    expect(app).toBeTruthy();
  }); 

});
