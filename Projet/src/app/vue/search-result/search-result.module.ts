import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultComponent } from './search-result.component';
import { SingleProductModule } from '../single-product/single-product.module';
import { SearchResultService } from 'src/app/services/searchresult.service';
@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule, 
    SingleProductModule   
  ], 
})
export class SearchResultModule { }
