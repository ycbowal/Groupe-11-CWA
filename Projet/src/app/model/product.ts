export class Product {
    relativePrice!: number;
    id!: string;
    name!: string;
    description!: string;
    realPrice!: number;
    totalNbCopies!: number;
    urlMainImage!: string;
    typeofproducts!: string; 
    isAvailable = true;
  constructor(
     realtiveprice : number , id: string, name : string , description : string, 
     realprice : number, totalnbcopies: number, urlimage : string, 
     typeofproducts : string , isavailable: boolean 
  ) {
    this.relativePrice = realtiveprice ; 
    this.id = id ; 
    this.name = name ; 
    this.description = description ; 
    this.realPrice = realprice ; 
    this.totalNbCopies = totalnbcopies ; 
    this.urlMainImage = urlimage ; 
    this.typeofproducts = typeofproducts ; 
    this.isAvailable = isavailable ; 
  }
 
}
