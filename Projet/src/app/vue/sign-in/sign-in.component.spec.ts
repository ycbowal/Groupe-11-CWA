import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockClients } from 'src/app/model/mockClients';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('inscription utilisateur',()=>{
    const c = MockClients[0] ; 
    component.lastName?.setValue(c.lastName) ; 
    component.identifier?.setValue(c.identifier) ; 
    component.firstName?.setValue(c.firstName) ; 
    component.password?.setValue(c.password) ; 
    component.retypedPassword?.setValue(c.password) ; 
    component.onSignIn() ; 
    expect(component.isAlreadyRegistered).toEqual(true)  ;
  }) ;

  it('createForm', ()=>{
    expect(component.createForm()).toBeTruthy() ; 
  })

});
