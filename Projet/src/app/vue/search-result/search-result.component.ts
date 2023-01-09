import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../../services/searchresult.service';
import { Product } from '../../model/product';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  ProductsList!: Product[];
  constructor(private searchResult:SearchResultService) {
      if(this.searchResult.GetProducts){
        if(this.searchResult.GetProducts.length>0)
        this.searchResult.getSearchProducts().subscribe((result) => (this.ProductsList = result));
        this.searchResult.Products=[];
      }}
  ngOnInit() {}
}
