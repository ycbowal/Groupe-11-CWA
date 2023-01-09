import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSheetComponent } from './product-sheet.component';
import { Router, RouterModule } from '@angular/router';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ProductsheetPageRoutes } from './product-sheet.route';

@NgModule({
  declarations: [ProductSheetComponent],
  imports: [CommonModule,RouterModule.forChild(ProductsheetPageRoutes)],
  })
export class ProductSheetModule { }
