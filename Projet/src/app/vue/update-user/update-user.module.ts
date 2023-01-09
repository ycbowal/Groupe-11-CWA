import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserComponent } from './update-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
 
  @NgModule({
  declarations: [ UpdateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule    
  ],       
  exports:[UpdateUserComponent]         
 })
export class UpdateUserModule { }
