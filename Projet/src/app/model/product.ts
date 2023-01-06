export class Product {
    relativePrice!: number;
    id!: string;
    name!: string;
    description!: string;
    realPrice!: number;
    totalNbCopies!: number;
    urlMainImage!: string;
    isAvailable = true;
  constructor(relativeprice : number,id : string, name: string ,
    description : string, realprice : number, 
    totalNbCopies : number , 
    urlMainImage : string ,
    isAvailable : boolean ) {
    this.relativePrice = relativeprice ;
    this.id = id ; 
    this.name = name; 
    this.description = description ; 
    this.realPrice = realprice ; 
    this.totalNbCopies = totalNbCopies ; 
    this.urlMainImage = urlMainImage ; 
    this.isAvailable = isAvailable ; 
  }
  
}
