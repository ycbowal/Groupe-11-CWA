import { Basket } from "./basket";
import { User } from "./user";
import { Order } from "./order";
import { Address } from "./address";
import { ClientProduct } from "./client-product";
export class Client extends User {
    //protected bucket!: Bucket;
    //protected orders!: Order[]
    //protected favorits!: ClientProduct[];
    constructor(lastName: string, firstName: string, password: string, identifier: string) {
        super(lastName, firstName, password, identifier);
        /*
        const buckId = (mail)?mail:password;
        this.bucket = new Bucket(buckId);
        */
    }
}
