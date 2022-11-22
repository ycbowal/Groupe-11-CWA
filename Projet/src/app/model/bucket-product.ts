import { ClientProduct } from "./client-product";
export class BucketProduct {
    public product!: ClientProduct;
    public nbWantedCopies!: number;
    
    constructor(product: ClientProduct) {
        this.product = product;
        this.nbWantedCopies = 1;
    }
}
