import { Basket } from "./basket";

export class Order {
    private date!: Date;
    private bucket!: Basket;
    private id!: string;
    constructor(bucket: Basket, id: string, date?: Date) {
        this.id = id;
        this.bucket = bucket;
        this.date = (date)?date:(new Date());
    }
}
