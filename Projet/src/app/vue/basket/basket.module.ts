import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BasketComponent } from './basket.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { basketPageRoutes } from './basket.route'; 
@NgModule({
  declarations: [
    BasketComponent,
  ],   
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(basketPageRoutes),
    CommonModule
   ],
 })
export class basketModule {}
