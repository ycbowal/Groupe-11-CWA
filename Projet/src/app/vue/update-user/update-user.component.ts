import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { copyUser, fillDaysTable, fillYearsTable, Gender, validDate } from '../../controller/utils';
import { Address } from '../../model/address';
import { Client } from '../../model/client';
import { GlobalVariablesService } from '../../services/global-variables.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  tmpUser!: Client;
  submitted: boolean = false;
  userForm!:any;
  isFullyUpdated: boolean = false;
  days: string[] = [];
  months: string[] = [
    'Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août',
    'Septembre', 'Octobre', 'Novembre', 'Decembre'
  ];
  years: string[] = [];
  typesOfWays: string[] = ['Rue', 'Boulevard', 'Avenue', 'Chemin', 'Ruelle', 'Impasse'];
  towns: string[] = ['Dijon', 'Paris', 'Lyon', 'Marseille', 'Nancy', 'Rouen', 'Reims', 'Rennes', 'Bordeaux', 'Auxerres', 'Tours'];
  invalidAddress: boolean = false;
  dateIsValid: boolean = true;
  
  constructor(private router: Router, private fb: FormBuilder, private globalVariables: GlobalVariablesService) {
    this.tmpUser = copyUser(this.globalVariables.user);
    fillYearsTable(this.years, '1935', '2018');
    fillDaysTable(this.days);
    this.createForm();
  }

  createForm(): void {
    this.userForm = this.fb.group({
        firstName: [this.globalVariables.user.firstName, [Validators.required, Validators.minLength(2)]],
        lastName: [this.globalVariables.user.lastName, [Validators.required, Validators.minLength(2)]],
        addr: [this.globalVariables.user.address.addr, Validators.pattern('^[0-9]{1,3} [a-zA-Z -]+,( )*[0-9]{1,7} [a-zA-Z]')],
        postalCode: [this.globalVariables.user.address.postalCode],
        town: [this.globalVariables.user.address.town],
        region: [this.globalVariables.user.address.region],
        country: [this.globalVariables.user.address.country],
        birthDate: [''],
        birthMonth: [''],
        birthYear: [''],
        gender: [''],


    });
  }
  onUpdate(): void {
    this.submitted = true;
    let day = this.birthDate?.value, month = this.birthMonth?.value, year = this.birthYear?.value;
    
    day = parseInt(((day)?day:this.globalVariables.user.birthDay.getDate()));
    month = parseInt(((month)?month:this.globalVariables.user.birthDay.getMonth()));
    year = parseInt(((year)?year:this.globalVariables.user.birthDay.getFullYear()));

    console.log('Avant appel', typeof(parseInt(day)), month, year);
    this.dateIsValid = validDate(day, month, year);
    console.log(this.dateIsValid);
    if(((this.addr?.dirty && this.addr.value.length > 0) || (this.postalCode?.dirty && this.postalCode.value.length > 0) ||
     (this.town?.dirty && this.town.value.length > 0) || (this.region?.dirty && this.region.value.length > 0) || (this.country?.dirty && this.country.value.length > 0)) &&
        (this.addr?.pristine || this.postalCode?.pristine || this.town?.pristine || this.region?.pristine || this.country?.pristine)) {
          this.invalidAddress = true;
        }
    else if(!this.dateIsValid) {
    }
    else {
      this.invalidAddress = false;
      this.globalVariables.user.firstName = this.firstName?.value;
      this.globalVariables.user.lastName = this.lastName?.value;
      this.globalVariables.user.birthDay = new Date(year, month, day);
      this.globalVariables.user.address = new Address(this.addr?.value, this.postalCode?.value, this.town?.value,
         this.region?.value, this.country?.value);
      if(this.gender?.value === 'F')
        this.globalVariables.user.gender = Gender.Female;
      else if(this.gender?.value === 'M')
        this.globalVariables.user.gender = Gender.Male;
      else if(this.gender?.value === 'O')
        this.globalVariables.user.gender = Gender.NonBinary;
      
      this.router.navigateByUrl('')
    }
    
  }

  onCancel(): void {
    this.router.navigateByUrl('');
  }



  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get addr() { return this.userForm.get('addr'); }
  get postalCode() { return this.userForm.get('postalCode'); }
  get town() { return this.userForm.get('town'); }
  get region() { return this.userForm.get('region'); }
  get country() { return this.userForm.get('country'); } 
  get gender() { return this.userForm.get('gender'); }
  get birthDate() { return this.userForm.get('birthDate'); }
  get birthMonth() { return this.userForm.get('birthMonth'); }
  get birthYear() { return this.userForm.get('birthYear'); }


}
