import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { ProductsListModule } from '../product-list/products-list.module';
import { ProductListComponent } from '../product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { LandingPageRoutes } from './landing-page.route';
 @NgModule({
  declarations: [LandingPageComponent],
  imports: [
      CommonModule,ProductsListModule,RouterModule.forChild(LandingPageRoutes)
   ],
   exports:[LandingPageComponent]
})
export class LandingPageModule { }
