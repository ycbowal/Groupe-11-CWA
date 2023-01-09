import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './log-in.component';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { Router, RouterModule } from '@angular/router';
import { loginPageRoutes } from './log-in.route';
@NgModule({
  declarations: [LogInComponent],
  imports:[CommonModule,FormsModule,RouterModule.forChild(loginPageRoutes)],
  exports:[LogInComponent],
 })
export class LogInModule { }
