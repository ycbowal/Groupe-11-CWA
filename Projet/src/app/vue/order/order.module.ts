import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { Router, RouterModule } from '@angular/router';
import { OrderPageRoutes } from './order.route';
@NgModule({
  declarations: [ OrderComponent],
  imports: [ 
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,RouterModule.forChild(OrderPageRoutes) 
],
 })
export class OrderModule { }
