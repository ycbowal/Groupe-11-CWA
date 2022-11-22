import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { nonIdenticRetypedPasswordValidator} from 'src/app/controller/utils';
import { Client } from 'src/app/model/client';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
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
      (this.mail?.pristine && this.tel?.pristine) || (this.mail?.dirty && this.mail?.invalid) || (this.tel?.dirty && this.tel?.invalid) || (this.tel?.value.length === 0 && this.mail?.value.length === 0)) {
        return;
      }
      else {
        const newClient = new Client(this.lastName?.value, this.firstName?.value, this.password?.value, this.mail?.value, this.tel?.value);
        if(this.globalVariable.registerNewClient(newClient, (this.mail?.value)?this.mail.value:this.tel?.value)) {
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
        tel: ['', Validators.pattern('^[0-9]{8,15}$')],
        mail: ['', Validators.email],
        retypedPassword: ['']
    });  
    this.retypedPassword?.addValidators(nonIdenticRetypedPasswordValidator(this.password as AbstractControl));
  }
  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get password() { return this.userForm.get('password'); }
  get retypedPassword() { return this.userForm.get('retypedPassword'); }
  get mail() { return this.userForm.get('mail'); }
  get tel() { return this.userForm.get('tel'); }  

}
