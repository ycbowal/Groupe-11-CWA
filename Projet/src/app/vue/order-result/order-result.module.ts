import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderResultComponent } from './order-result.component';
import { Router } from '@angular/router';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
@NgModule({
  declarations: [OrderResultComponent],
  imports: [
    CommonModule,
  ],
  exports:[OrderResultComponent] 
})
export class OrderResultModule { }
