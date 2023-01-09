import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { SingleProductModule } from '../single-product/single-product.module';
import { SingleProductComponent } from '../single-product/single-product.component';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { Router, RouterModule } from '@angular/router';
import { ProductListtPageRoutes } from './product-list.route';
@NgModule({
  declarations: [ProductListComponent],
  imports:[CommonModule,FormsModule,SingleProductModule,RouterModule.forChild(ProductListtPageRoutes)],
  exports:[ProductListComponent ],
 })
export class ProductsListModule { }
