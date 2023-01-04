import { Basket } from "./basket";
import { User } from "./user";
import { Order } from "./order";
import { Address } from "./address";
import { ClientProduct } from "./client-product";
export class Client extends User {
   
    constructor(lastName: string, firstName: string, password: string, identifier: string) {
        super(lastName, firstName, password, identifier);
        
    }
}
