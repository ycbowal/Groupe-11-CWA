export class Address {
    constructor(public _num: number,
                public _name: string,
                public _town: string) {
                    
                }
    set num(num: number) { this._num = num; }
    set name(name: string) { this._name = name; }
    set town(town: string) { this._town = town; }
    get num(): number { return this._num; }
    get name(): string { return this._name; }
    get town(): string { return this._town; }
}
