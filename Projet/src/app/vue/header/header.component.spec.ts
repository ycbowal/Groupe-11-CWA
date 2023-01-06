import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let ev : Event ; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',()=>{
    expect(component).toBeTruthy() ; 
  }) ;

  it('mouse enter', () => {
    component.mouseEnter(ev) ; 
    expect(component.mouseIsOverMyAccount).toEqual(true) ; 
  });

  it('mouse leave',()=>{
    component.mouseLeave(ev) ; 
    expect(component.mouseIsOverMyAccount).toEqual(false) ; 
  }); 
  it('onFavorites', ()=>{
    expect(component.onFavorites()).toBeTruthy(); 
  }) ; 
  it('onDisconnect', ()=>{
    expect(component.onDisconnect()).toBeTruthy() ; 
  }); 
  it('onUpdateUser', ()=>{
    expect(component.onUpdateUser()).toBeTruthy() ; 
  }); 
  it('sendNamevaluetoservice', ()=>{
    expect(component.sendNamevaluetoservice()).toBeTruthy() ; 
  }); 
  it('gotoBasketView', ()=>{
    expect(component.gotoBasketView()).toBeTruthy() ; 
  }); 
  it('refresh', ()=>{
    expect(component.refresh()).toBeTruthy() ; 
  }); 

});
