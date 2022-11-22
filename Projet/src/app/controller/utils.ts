import { Validators, FormGroup, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { Client } from '../model/client';
import { GlobalVariablesService } from '../services/global-variables.service';

globalVariable: GlobalVariablesService
export function nonIdenticRetypedPasswordValidator(passwordControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return (control.value !== passwordControl.value && passwordControl.value.length !== 0)?{retypedPasswordError: {value: control.value}} : null;
    };
}

/*
export function logIn(identifier: string, password: string): boolean {
    return true;
}

export function registerNewClient(client: Client): boolean {
    if(globalVariable.isUserAlreadyRegistered(client)) {

    }
    return true;
}
*/
export function _validMailAndTel(pattern: string): boolean {
    const reg = new RegExp('^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$');
    return (reg.test(pattern))?true:(new RegExp('^[0-9]{8,15}$')).test(pattern);
}