import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductComponent } from './single-product.component';

describe('SingleProductComponent', () => {
  let component: SingleProductComponent;
  let fixture: ComponentFixture<SingleProductComponent>;
  let event : Event ; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onToggleFavorites', ()=>{
    expect(component.onToggleFavorites(event)).toBeTruthy() ; 
  }) ; 
  it('onGoToTheDescription',()=>{
    expect(component.onGoToTheDescription()).toBeTruthy(); 
  }) ; 
  it('addToBasket',()=>{
    expect(component.addToBasket()).toBeTruthy() ; 
  });   
});
