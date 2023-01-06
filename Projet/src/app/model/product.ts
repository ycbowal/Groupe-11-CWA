export class Product {
    relativePrice!: number;
    id!: string;
    name!: string;
    description!: string;
    realPrice!: number;
    totalNbCopies!: number;
    urlMainImage!: string;
    isAvailable = true;
  constructor(
    relativePrice: number,
    id: string,
    name: string,
    description: string,
    realPrice: number,
    totalNbCopies: number,
    urlMainImage: string,
    isAvailable = true
  ) {
    // this.realPrice = realPrice ; 
    this.relativePrice = realPrice ; 
    this.id= id; 
    this.name = name ; 
    this.description = description ; 
    this.realPrice = realPrice ;
    this.totalNbCopies = totalNbCopies ; 
    this.urlMainImage = urlMainImage ;
    this.isAvailable = isAvailable ;
  }
 

 
}
