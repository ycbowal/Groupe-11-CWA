import { TestBed } from '@angular/core/testing';
import { Client } from '../model/client';
import { MockClients } from '../model/mockClients';

import { DeepGlobalVariablesService } from './deep-global-variables.service';

describe('DeepGlobalVariablesService', () => {
  let service: DeepGlobalVariablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepGlobalVariablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ajouter un nouveau client',()=>{
    const c = MockClients[0] ; 
    expect(service.addNewClient(c)).toBeTruthy() ; 
  }); 

  it('avoir un client',()=>{
    const c = MockClients[0] ; 
    expect(service.getClientByIdentifier(c.identifier)).toBeTruthy() ; 
  }); 

  it('already registred', ()=>{
    const c= MockClients[0] ; 
    expect(service.isUserAlreadyRegistered(c.identifier)).toEqual(true) ; 
  }); 

  it('avoir un produit par identifiant', ()=>{
    expect(service.getProductByIdentifier("1")).toBeTruthy();  
  }); 

});
