import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { Address } from '../model/address';
import { Client } from '../model/client';
import { User } from '../model/user';


export class Utils{

}
export function nonIdenticRetypedPasswordValidator(passwordControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return (control.value !== passwordControl.value && passwordControl.value.length !== 0)?{retypedPasswordError: {value: control.value}} : null;
    };
}



export function identifierValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const reg = new RegExp('^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$'); 
        return !(reg.test(control.value) || (new RegExp('^[0-9]{8,15}$')).test(control.value))?{retypedPasswordError: {value: control.value}} : null;
    };
}

export function _validMailAndTel(pattern: string): boolean {
    const reg = new RegExp('^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$');
    return (reg.test(pattern))?true:(new RegExp('^[0-9]{8,15}$')).test(pattern);
}

export function validDate(day: number, month: number, year: number): boolean {
    let tmpDate = new Date(year, month, day);
    //tmpDate.setTime(testDate.getTime());
    console.log(day, month, year);
    console.log(tmpDate.getDate(), tmpDate.getMonth(), tmpDate.getFullYear())
    return tmpDate.getFullYear() === year && tmpDate.getMonth() === month &&
            tmpDate.getDate() === day;
}
export function copyUser(userToCopy: User) {
    let cop = new Client(userToCopy.lastName, userToCopy.firstName, userToCopy.password, userToCopy.identifier);
    cop.address = new Address(userToCopy.address.addr, userToCopy.address.postalCode, userToCopy.address.town,
        userToCopy.address.region, userToCopy.address.country);
    return cop;
}
export function fillYearsTable(tab: string[], from: string, to: string): void {
    for(let i=(from as unknown as number); i <= (to as unknown as number); i++) {
        tab.push(i as unknown as string);
    }
}
export function fillDaysTable(tab: string[]) {
    for(let i=1; i <= 31; i++) {
        tab.push(i as unknown as string);
    }
}
export enum Gender {
    Male, Female, NonBinary, undefined
}