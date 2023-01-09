export class Product {
  private _relativePrice!: number;
  constructor(
    private _id: string,
    private _name: string,
    private _description: string,
    private _realPrice: number,
    private _totalNbCopies: number,
    private _urlMainImage: string,
    private _urlImages: string[] = [],
    private _categories: string = '',
    private _additionalInfs: string[] = [],
    private _reductionRate: number = 0,
    private _isNew: boolean = true,
    private _rate: number = 5,
    private _isAvailable = true
  ) {
    this._relativePrice =
      this.realPrice - (this.realPrice * this.reductionRate) / 100;
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get description(): string {
    return this._description;
  }
  get realPrice(): number {
    return this._realPrice;
  }
  get reductionRate(): number {
    return this._reductionRate;
  }
  get rate(): number {
    return this._rate;
  }
  get urlMainImage(): string {
    return this._urlMainImage;
  }
  get categories(): string {
    return this._categories;
  }
  get isNew(): boolean {
    return this._isNew;
  }
  get relativePrice(): number {
    return this._relativePrice;
  }
  set name(name: string) {
    this._name = name;
  }
  set description(description: string) {
    this._description = description;
  }
  set realPrice(realPrice: number) {
    this._realPrice = realPrice;
  }
  set reductionRate(reductionRate: number) {
    this._reductionRate = reductionRate;
  }

  set rate(rate: number) {
    this._rate = rate;
  }
}
