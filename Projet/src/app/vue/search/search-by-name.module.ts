import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from  './search.component';
 import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module'; 
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { Router } from '@angular/router';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[SearchComponent],
})
export class SearchByNameModule { }
