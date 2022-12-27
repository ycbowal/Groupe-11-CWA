import { Product } from './product';

export class ClientProduct {
  constructor(private _product: Product, private _isFavorited: boolean) {}
  get product(): Product {
    return this._product;
  }
}
