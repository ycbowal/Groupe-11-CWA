import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product.component';
import { FormsModule } from '@angular/forms';
import { BasketproductsService } from 'src/app/services/basketproducts.service';
import { Router, RouterModule } from '@angular/router';
import { SinglePageRoutes } from './single-product.route';
@NgModule({
  declarations: [SingleProductComponent],
  imports:[
    CommonModule,RouterModule.forChild(SinglePageRoutes)
  ],
  exports:[SingleProductComponent],
 })
export class SingleProductModule { }
