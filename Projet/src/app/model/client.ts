import { Bucket } from "./bucket";
import { User } from "./user";
import { Order } from "./order";
import { Address } from "./address";
import { ClientProduct } from "./client-product";
export class Client extends User {
    //protected bucket!: Bucket;
    //protected orders!: Order[]
    //protected favorits!: ClientProduct[];
    constructor(lastName: string, firstName: string, password: string, mail?: string, tel?: string) {
        super(lastName, firstName, password, mail, tel);
        /*
        const buckId = (mail)?mail:password;
        this.bucket = new Bucket(buckId);
        */
    }
}
