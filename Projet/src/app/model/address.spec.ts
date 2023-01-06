import { Address } from './address';

describe('Address', () => {
  it('should create an instance', () => {
    const adr = new Address("fea", "fxs" ,"vaop","feai", "ioeafo") ; 
    expect(adr).toBeTruthy();
  });
});

