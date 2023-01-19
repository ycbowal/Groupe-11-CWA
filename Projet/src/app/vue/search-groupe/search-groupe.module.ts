import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchByNameComponent } from '../searchByName/searchByName.component';
import { FormsModule } from '@angular/forms';
import { SearchGroupeComponent } from './search-groupe.component';
import { SearchByPriceComponent } from '../search-by-price/search-by-price.component';

@NgModule({
  declarations: [SearchByNameComponent,SearchGroupeComponent,SearchByPriceComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[SearchByNameComponent,SearchGroupeComponent,SearchByPriceComponent]
})
export class SearchGroupeModule { }
