export class Address {
    constructor(private _addr: string,
                private _postalCode: string,
                private _town: string,
                private _region: string,
                private _country: string) {
                    
                }
    set addr(ad: string) { this._addr = ad; }
    set postalCode(pC: string) { this._postalCode = pC; }
    set town(town: string) { this._town = town; }
    set region(region: string) { this._region = region; }
    set country(country: string) { this._country = country; }

    get addr(): string { return this._addr; }
    get postalCode(): string { return this._postalCode; }
    get town(): string { return this._town; }
    get region(): string { return this._region; }
    get country(): string { return this._country; }
}
