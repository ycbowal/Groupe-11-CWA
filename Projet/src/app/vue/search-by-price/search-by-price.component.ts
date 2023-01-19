import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../../services/global-variables.service';
import { SearchResultService } from '../../services/searchresult.service';
import { research } from '../../model/Reseach';
import { Product } from '../../model/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-by-price',
  templateUrl: './search-by-price.component.html',
  styleUrls: ['./search-by-price.component.css']
})
export class SearchByPriceComponent implements OnInit {

  ProductsList!: Product[];
  ProductsListTemp!: Product[];
  Research!: research;
  Price!:any ;
  flag:any="Sup";
  constructor(
    private globaVariables: GlobalVariablesService,
    private router: Router,
    private searchResult: SearchResultService
  ) {
    this.globaVariables
      .getProducts()
      .subscribe((result) => (this.ProductsList = result));
  }
  ngOnInit(): void {
    this.Research = new research();
  }
  getProductByPriceSup(): void {
    if(this.Price){
    this.ProductsListTemp=this.Research.Products;
    this.searchResult.Products = this.Research.getProductByPriceSup(this.Price,this.ProductsList);
    if(this.searchResult.GetProducts.length>0)
       this.router.navigateByUrl('searchResult');
    else
      this.router.navigateByUrl("searchResult");
    }else {
      this.router.navigateByUrl("searchResult");
    }
    
  }

  getProductByPriceInf(): void {
    if(this.Price){
    this.ProductsListTemp=this.Research.Products;
    this.searchResult.Products = this.Research.getProductByPriceInf(this.Price,this.ProductsList);
    if(this.searchResult.GetProducts.length>0)
       this.router.navigateByUrl('searchResult');
    else
      this.router.navigateByUrl("searchResult");
    }else {
      this.router.navigateByUrl("searchResult");
    }
    
  }
}
