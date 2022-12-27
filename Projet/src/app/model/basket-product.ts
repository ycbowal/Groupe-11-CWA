import { ClientProduct } from "./client-product";
export class BasketProduct {
    public Clientproduct!: ClientProduct;
    public nbWantedCopies!: number;
    
    constructor(Clientproduct: ClientProduct) {
        this.Clientproduct = Clientproduct;
        this.nbWantedCopies = 1;
    }
}
