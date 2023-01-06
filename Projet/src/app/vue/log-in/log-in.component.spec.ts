import { NgFor } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { MockClients } from 'src/app/model/mockClients';

import { LogInComponent } from './log-in.component';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let userform: NgForm ; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login', ()=>{
    const c = MockClients[0] ;  
    userform.value.identifier = c.identifier; 
    userform.value.password = c.password; 
    expect(component.onLogIn(userform)).toBeTruthy() ; 
  }) ;
  it('invalid mail', ()=>{
    expect(component.invalidMailAndTel("bonjour@gmail.com")).toEqual(true) ; 
  }) ; 
});
