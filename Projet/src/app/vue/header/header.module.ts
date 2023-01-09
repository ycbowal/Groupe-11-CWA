import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchByNameModule } from '../search/search-by-name.module';
import { SearchComponent } from '../search/search.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
@NgModule({
    declarations: [HeaderComponent],
    imports: [ 
      CommonModule,SearchByNameModule,AppRoutingModule,
      ],
     exports: [HeaderComponent],
 })
export class HeaderModule { }
 