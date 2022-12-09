import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { DeepGlobalVariablesService } from './deep-global-variables.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
import { Product } from '../model/product';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  
  _isConnected: boolean = false;
  _user: Client | undefined;
  constructor(private deepGlobalVariables: DeepGlobalVariablesService)
  { 
    
  }

  isUserAlreadyRegistered(identifier: string): boolean {
    return this.deepGlobalVariables.isUserAlreadyRegistered(identifier);
  }

  logIn(identifier: string, password: string): boolean {
    if(this.isUserAlreadyRegistered(identifier)) {
      this.user = this.deepGlobalVariables.getClientByIdentifier(identifier) as Client;
      if(this.user && this.user.checkPassword(password)) {
        this.isConnected = true;
        return this.isConnected;
      }
    }
    return false;
  }
  registerNewClient(client: Client, identifier: string): boolean {
    console.log('Registration ', identifier);
    if(this.isUserAlreadyRegistered(identifier)) {
      return false;
    }
    else {
      this.deepGlobalVariables.addNewClient(client);
      return true;
    }
  }
  logOut(): void {
    this.user = undefined;
    this.isConnected = false;
  }
  getProducts(): Observable<Product[]> {
    return of(this.deepGlobalVariables.tmpProducts);
  }
  getProduct(identifier: string): Observable<Product >{ 
    return this.deepGlobalVariables.getProductByIdentifier(identifier);
  }

  set isConnected(isConnected: boolean) { this._isConnected = isConnected; }
  get isConnected() { return this._isConnected; }
  get user(): Client { return this._user as Client; }
  set user(client: Client | undefined) { this._user = client; }
}
