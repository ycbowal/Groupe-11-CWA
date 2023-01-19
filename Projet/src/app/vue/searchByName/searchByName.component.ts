import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../../services/global-variables.service';
import { SearchResultService } from '../../services/searchresult.service';
import { research } from '../../model/Reseach';
import { Product } from '../../model/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './searchByName.component.html',
  styleUrls: ['./searchByName.component.css'],
})
export class SearchByNameComponent implements OnInit {
  ProductsList!: Product[];
  ProductsListTemp!: Product[];
  Research!: research;
  name!:any ;
  flag: boolean = false;
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
  getProductByName(): void {
    if(this.name){
    this.ProductsListTemp=this.Research.getProductByname(this.name, this.ProductsList);
    this.searchResult.Products = this.Research.getProductByname(this.name,this.ProductsList);
    if(this.searchResult.GetProducts.length>0)
       this.router.navigateByUrl('searchResult');
    else
      this.router.navigateByUrl("searchResult");
    }else {
      this.router.navigateByUrl("searchResult");
    }
    
  }
  
}
