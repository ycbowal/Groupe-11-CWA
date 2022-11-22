export abstract class Product {
    public name!: string;
    public description!: string;
    public rate!: number;
    public additionalInfs!: string[];
    public id!: string;
    public reductionRate!: number;
    public urlImages!: string[];
    public isNew!: boolean;
    public isAvailable!: boolean;
    public categories!: string[];
    public totalNbCopies!: number;
    public realPrice!: number;
    public relativePrice!: number;
    constructor(name: string, description: string, rate: number, id: string, reductionRate: number,
        urlImages: string[], isNew: boolean, price: number, categories: string[], totalNbCopies: number, additionalInfs?: string[]) {
        this.name = name;
        this.description = description;
        this.rate = rate;
        this.additionalInfs = (additionalInfs)?additionalInfs:[];
        this.id = id;
        this.reductionRate = reductionRate;
        this.urlImages = urlImages;
        this.isNew = isNew;
        this.realPrice = price;
        this.categories = categories;
        this.totalNbCopies = totalNbCopies;
        this.relativePrice = this.realPrice-(this.realPrice*this.reductionRate/100);
        this.relativePrice = (this.relativePrice >= 0)?this.relativePrice:0;
    }
}
