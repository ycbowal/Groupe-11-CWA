import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { _validMailAndTel } from '../../controller/utils';
import { GlobalVariablesService } from '../../services/global-variables.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  identifier: string = '';
  password: string = '';
  submitted: boolean = false;
  isNotRegistered: boolean = false;
  constructor(private globalVariables: GlobalVariablesService, private router: Router) { }

  onLogIn(userForm: NgForm): void {
    this.submitted = true;
    if(!(this.invalidMailAndTel(userForm.value.identifier) || userForm.value.password.length < 8)) {
      if(this.globalVariables.logIn(this.identifier, this.password)) {
        this.router.navigateByUrl('/');
        this.identifier = this.password = '';
        this.submitted = this.isNotRegistered = false;}
      else {
        this.isNotRegistered = true;}
    }   
    else {
      this.isNotRegistered = true;
    }
  

  }
  invalidMailAndTel(pattern: string): boolean { return !_validMailAndTel(pattern); }
}
