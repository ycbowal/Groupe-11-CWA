import { TestBed } from '@angular/core/testing';
import { MockClients } from '../model/mockClients';

import { GlobalVariablesService } from './global-variables.service';

describe('GlobalVariablesService', () => {
  let service: GlobalVariablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalVariablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('enregistrer un nouveau client ', ()=>{
    const c = MockClients[0] ; 
    expect(service.registerNewClient(c ,c.identifier)).toEqual(true) ; 
  }); 

  it('login', ()=>{
    const c = MockClients[0] ; 
    expect(service.logIn(c.identifier, c.password)).toEqual(true) ; 
  }) ; 

  it('logout', ()=>{
    service.logOut(); 
    expect(service.isConnected).toEqual(false) ; 
  }) ; 
  
  it('getproducts',()=>{
    expect(service.getProduct("1")).toBeTruthy() ; 
  })
});
