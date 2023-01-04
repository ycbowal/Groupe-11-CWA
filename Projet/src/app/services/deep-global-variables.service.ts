import { Injectable,OnInit} from '@angular/core';
import { Observable,of,} from 'rxjs';
import { Client } from '../model/client';
import { Product } from '../model/product';
import { MockClients } from '../model/mockClients';
import { ProductsService } from './products.service';
@Injectable({
  providedIn: 'root'
})
export class DeepGlobalVariablesService implements OnInit{
  tmpRegisteredUsers:Client[]=MockClients;
tmpProducts!:Product[] ;
tmpProducts1!:any;
url :string='../../assets/MockProducts/products.json';
constructor(private Products:ProductsService){
  this.Products.getProducts()
  .subscribe((result) => (this.tmpProducts = result));
  console.log("deep");
  console.info(this.tmpProducts);
}
ngOnInit():void{

};

isUserAlreadyRegistered(identifier: string): boolean {
    return (this.getClientByIdentifier(identifier))?true:false;
  }

getClientByIdentifier(identifier: string): Client | undefined {
    const Result=this.tmpRegisteredUsers.filter((client) => {
      return (identifier.length > 0 && (client.identifier === identifier));
    });
    return Result[0];
}

addNewClient(client: Client): void {
    this.tmpRegisteredUsers.push(client);
}
getProductByIdentifier(identifier: string):Observable<Product> {
    const Resultat=this.tmpProducts.filter((product) => {
      return (identifier.length > 0 && (product.id === identifier));
    });
    return of(Resultat[0]);
  }
  
}
