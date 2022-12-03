import { Gender } from "../controller/utils";
import { Address } from "./address";
import { Basket } from "./basket";

export abstract class User {

    protected _address!: Address;
    protected _birthDay!: Date;
    protected _gender!: Gender;
    protected _favorites: string[] = []
    constructor(protected _lastName: string, protected _firstName: string,
        protected _password: string, protected _identifier: string) {
            this.address = new Address('', '', '', '', '');
            this.gender = Gender.undefined;
            this.birthDay = new Date();
       
    }

    /*
    update(user: User) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.identifier = user.identifier;
    }
    */
    toggleFavorite(productId: string): void {
        const ind = this.getFavIndex(productId);
        if(ind > -1) {
            this._favorites.splice(ind, 1)
        }
        else {
            this._favorites.push(productId);
        }
    }
    getFavIndex(productId: string): number {
        return this._favorites.findIndex(i => i === productId);
    }
    get firstName():string { return this._firstName; }
    get lastName():string { return this._lastName; }
    get identifier(): string { return this._identifier; }
    get gender(): Gender { return this._gender; }
    get birthDay(): Date { return this._birthDay; }
    get address(): Address { return this._address; }
    get favorites(): string[] { return this._favorites; }
    checkPassword(password: string): boolean { return this._password === password; }
    




    set firstName(fN: string) { this._firstName = fN; }
    set lastName(lN: string) { this._lastName = lN; }
    set identifier(identifier: string) { this._identifier = identifier; }
    set password(pass: string) { this._password = pass; }

    set gender(g: Gender) { this._gender = g; }
    set address(ad: Address) { this._address = ad; }
    set birthDay(bD: Date) { this._birthDay = bD; }

}
