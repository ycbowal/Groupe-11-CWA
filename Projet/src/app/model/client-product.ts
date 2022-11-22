import { Product } from "./product";

export class ClientProduct extends Product{
    constructor(name: string, description: string, rate: number, id: string, reductionRate: number,
        urlImages: string[], isNew: boolean, price: number, categories: string[], totalNbCopies: number, additionalInfs?: string[]) {
        super(name, description, rate, id, reductionRate, urlImages, isNew, price, categories, totalNbCopies, additionalInfs);
       
    }
}
