import { Bucket } from "./bucket";

export class Order {
    private date!: Date;
    private bucket!: Bucket;
    private id!: string;
    constructor(bucket: Bucket, id: string, date?: Date) {
        this.id = id;
        this.bucket = bucket;
        this.date = (date)?date:(new Date());
    }
}
