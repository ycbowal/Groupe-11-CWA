import { Basket } from './basket';
import { Order } from './order';

describe('Order', () => {
  it('should create an instance', () => {
    const bucket = new Basket(); 
    const or = new Order(bucket , "1" , new Date()) ; 
    expect(or).toBeTruthy();
  });
});
