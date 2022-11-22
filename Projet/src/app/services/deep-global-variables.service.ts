import { Injectable } from '@angular/core';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})

export class DeepGlobalVariablesService {
  tmpRegisteredUsers: Client[] = [
    new Client('CAMARA', 'Mamadou Yacine', 'nozama007', 'yacine@camara.fr', ''),
    new Client('CHAPPELLE', 'David', 'chapchap007', '', '0000000000')
  ];
  constructor() { }

  
  isUserAlreadyRegistered(identifier: string): boolean {
    return (this.getClientByIdentifier(identifier))?true:false;
  }
  getClientByIdentifier(identifier: string): Client | undefined {
    return this.tmpRegisteredUsers.find((client) => {
      console.log('Param id ', identifier);
      console.log('id tab ', client.tel, client.mail);
      return (identifier.length > 0 && (client.mail === identifier || client.tel === identifier));
    });
  }
  addNewClient(client: Client): void {
    this.tmpRegisteredUsers.push(client);
  }
  updateClient(client: Client, identifier: string) {
    this.getClientByIdentifier(identifier)?.update(client);
  } 
}
