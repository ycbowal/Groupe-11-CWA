import { BucketProduct } from "./bucket-product";
import { ClientProduct } from "./client-product";

export class Bucket {
    private relativePrice!: number;
    private realPrice!: number;
    private products!: BucketProduct[];
    private nbProducts!: number;
    private id!: string;
    constructor(id: string) {
        this.id = id;
        this.products = [];
        this.relativePrice = 0;
        this.realPrice = 0;
        this.nbProducts = 0;
    }

    deleteFromBucket(product: BucketProduct): void {
        const ind = this.products.findIndex(prod =>{return product.product.id === prod.product.id});
        if(ind) {
            this.products.splice(ind, 1)
            this.relativePrice -= product.product.relativePrice;
            this.realPrice -= product.product.realPrice;
        }
        else
            throw new Error('Erreur de suppression');
    }
    addToBucket(product: ClientProduct): void {
        const productInBucket = this.products.find(productInBucket => productInBucket.product.id === product.id);
        if(productInBucket) {
            productInBucket.nbWantedCopies++;
            this.relativePrice += product.relativePrice;
        }
        else {
            this.products.push(new BucketProduct(product));
        }
    }
}
