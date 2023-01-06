import { CreditCard } from './credit-card';

describe('Carte', () => {
  it('should create an instance', () => {
    const card = new CreditCard("Bozoie", "Bong" , "4546-5566-4489-8949" ,"21-09") ; 
    expect(card).toBeTruthy();
  });
});
