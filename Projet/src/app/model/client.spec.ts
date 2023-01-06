import { Client } from './client';
import { MockClients } from './mockClients';

describe('Client', () => {
  it('should create an instance', () => {
    //const client = new Client('POTTER', 'HARRY', 'poudlard', 'harrypotter@gmail.com', '0222', 'harrypotter@gmail.com')
    const client = MockClients[0] ; 
    expect(client).toBeTruthy();
  });
});
