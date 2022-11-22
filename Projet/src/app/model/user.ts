import { Address } from "./address";
import { Bucket } from "./bucket";

export abstract class User {

    protected userName?: string;
    protected adresse?: Address;
    
    constructor(protected _lastName: string, protected _firstName: string,
        protected _password: string, protected _mail: string = '', protected _tel: string = '') {
       
    }


    update(user: User) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.mail = user.mail;
        this.tel = user.tel;
        //this
    }
    get firstName():string { return this._firstName; }
    get lastName():string { return this._lastName; }
    get mail(): string { return this._mail; }
    get tel(): string { return this._tel; }
    checkPassword(password: string): boolean { return this._password === password; }
    
    set firstName(fN: string) { this._firstName = fN; }
    set lastName(lN: string) { this._lastName = lN; }
    set mail(mail: string) { this.mail = mail; }
    set tel(tel: string) { this.tel = tel; }
    set password(pass: string) { this._password = pass; }

}
