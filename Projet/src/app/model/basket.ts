import { BasketProduct } from './basket-product';
import { ClientProduct } from './client-product';

export class Basket {
  private relativePrice!: number;
  private realPrice!: number;
  private products!: BasketProduct[];
  private nbProducts!: number;
  private id!: string;
  private total!: number;
  constructor() {
    this.id = '';
    this.products = [];
    this.relativePrice = 0;
    this.realPrice = 0;
    this.nbProducts = 0;
    this.total = 0;
  }
  get _products(): BasketProduct[] {
    return this.products;
  }
  deleteFromBasket(Basketproduct: BasketProduct): void {
    const ind = this.products.findIndex((prod) => {
      return (
        Basketproduct.Clientproduct.product.id === prod.Clientproduct.product.id
      );
    });
    if (ind != null) {
      if (this.products[ind].nbWantedCopies > 1) {
        this.products[ind].nbWantedCopies--;
        this.relativePrice -= Basketproduct.Clientproduct.product.relativePrice;
        this.realPrice -= Basketproduct.Clientproduct.product.realPrice;
      } else {
        this.products.splice(ind, 1);
      }
    }
  }
 addToBasket(CProduct: ClientProduct): void {
    const res = this.products.find(
      (productInBucket) =>
        productInBucket.Clientproduct.product.id === CProduct.product.id
    );

    if (res) {
      res.nbWantedCopies++;
      this.relativePrice += CProduct.product.relativePrice;
    } else {
      this.products.push(new BasketProduct(CProduct));
    }
  }
  totalAmount(): number {
    for (let i = 0; i < this.products.length; i++) {
      this.total += this.products[i].Clientproduct.product.realPrice;
    }
    return this.total;
  }
  deleteDirectlyFromBasket(Basketproduct: BasketProduct): void {
    const ind = this.products.findIndex((prod) => {
      return (
        Basketproduct.Clientproduct.product.id === prod.Clientproduct.product.id
      );
    });
    if (ind != null) {
        this.products.splice(ind, 1);
      }
    }  
}
