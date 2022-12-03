import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { Product } from '../model/product'

@Injectable({
  providedIn: 'root'
})

export class DeepGlobalVariablesService {
  tmpRegisteredUsers: Client[] = [
    new Client('CAMARA', 'Mamadou Yacine', 'nozama007', 'yacine@camara.fr'),
    new Client('CHAPPELLE', 'David', 'chapchap007', '0000000000')
  ];

  tmpProducts: Product[] = [
    new Product('GOT1', 'Le trône de fer', 'Roman fantastique', 30, 1000, '../../assets/products_images/got1.png'),
    new Product('DK1', 'Les hommes ont peur de la lumière', 'Roman', 20, 1000, '../../assets/products_images/dk1.png'),
    new Product('DK2', 'L\'homme qui voulait vivre sa vie', 'Roman', 20, 1000, '../../assets/products_images/dk2.png'),
    new Product('DK3', 'Piège nuptial', 'Roman', 20, 1000, '../../assets/products_images/dk3.png'),
    new Product('DK4', 'La Symphonie du hasard', 'Roman', 20, 1000, '../../assets/products_images/dk4.png'),
    new Product('DK5', 'Les charmes de la vie conjugual', 'Roman', 20, 1000, '../../assets/products_images/dk5.png')

  ];

  
  isUserAlreadyRegistered(identifier: string): boolean {
    return (this.getClientByIdentifier(identifier))?true:false;
  }
  getClientByIdentifier(identifier: string): Client | undefined {
    return this.tmpRegisteredUsers.find((client) => {
      return (identifier.length > 0 && (client.identifier === identifier));
    });
  }
  addNewClient(client: Client): void {
    this.tmpRegisteredUsers.push(client);
  }
  getProductByIdentifier(identifier: string): Product | undefined {
    return this.tmpProducts.find((product) => {
      return (identifier.length > 0 && (product.id === identifier));
    });
  }
  
}
