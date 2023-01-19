import { Product } from "./product";
export class research
{
Products!:Product[];
 name!:string;
 Etat!:boolean;
 category!:string;
 constructor( ){}

 testwords(name1:string,name2:string):boolean{ 
     for(let i=0;i<name1.length;i=i+1) 
     { if(name1.charAt(i)!==name2.charAt(i))
            return false;
     }  
   return true;
 }
 
 getProductByname(name:string,Products:Product[]):Product[]
  { this.name=name;
    const  Result = Products.filter((obj)=>{
      return this.testwords(this.name,obj.name);
    });
     return  Result;
  }    
  getProductByPriceSup(Price :number,Products:Product[]): Product[]
  { 
     const Result = Products.filter((obj)=>{
                        return  obj.realPrice>=Price;
               });
          return Result;  
  }
  getProductByPriceInf(Price :number,Products:Product[]): Product[]
  { 
     const Result = Products.filter((obj)=>{
                        return  obj.realPrice<=Price;
               });
          return Result;  
  }
  
}