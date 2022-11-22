import { Payment } from "./payment";

export class CreditCard implements Payment {
    private firstName!: string;
    private lastName!: string;
    private cardNumber!: string;
    private expirationDate!: string;
    constructor(firstName: string, lastName: string, cardNumber: string, expirationDate: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
    }
}
