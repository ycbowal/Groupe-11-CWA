import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MinHeaderComponent} from "./min-header.component"
import { Router } from '@angular/router';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';


@NgModule({
  declarations: [MinHeaderComponent],
  imports: [CommonModule],
  exports:[MinHeaderComponent],
 })
export class MinHeaderModule { }
