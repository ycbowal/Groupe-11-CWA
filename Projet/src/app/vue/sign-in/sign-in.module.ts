import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { signInPageRoutes } from './sign-in.route';
@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(signInPageRoutes)
  ]
})
export class SignInModule { }
