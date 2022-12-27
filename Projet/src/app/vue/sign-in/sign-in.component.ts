import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { identifierValidator, nonIdenticRetypedPasswordValidator} from '../../controller/utils';
import { Client } from '../../model/client';
import { GlobalVariablesService } from '../../services/global-variables.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  userForm!: FormGroup;
  submitted: boolean = false;
  isAlreadyRegistered: boolean = false;
  isFullyRegistered: boolean = false;
  constructor(private fb: FormBuilder, private globalVariable: GlobalVariablesService, private router: Router) { 
    this.createForm();
  }

  onSignIn(): void {
    this.submitted = true;
    this.retypedPassword?.updateValueAndValidity();
    if(this.lastName?.invalid || this.firstName?.invalid || this.password?.invalid || this.retypedPassword?.invalid ||
      this.identifier?.invalid) {
        return;
      }
      else {
        const newClient = new Client(this.lastName?.value, this.firstName?.value, this.password?.value, this.identifier?.value);
        if(this.globalVariable.registerNewClient(newClient, this.identifier?.value)) {
          this.isFullyRegistered = true;
          setTimeout(() => {
            this.router.navigateByUrl('/toLogIn');
            this.isFullyRegistered = this.submitted = this.isAlreadyRegistered = false;
          }, 3000);
        }
        else {
          this.isAlreadyRegistered = true;
        }

      }
  }
  createForm(): void {
    this.userForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        identifier: ['', [Validators.required, identifierValidator()]],
        retypedPassword: ['']
    });  
    this.retypedPassword?.addValidators(nonIdenticRetypedPasswordValidator(this.password as AbstractControl));
  }
  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get password() { return this.userForm.get('password'); }
  get retypedPassword() { return this.userForm.get('retypedPassword'); }
  get identifier() { return this.userForm.get('identifier'); }
  //get tel() { return this.userForm.get('tel'); }  

}
