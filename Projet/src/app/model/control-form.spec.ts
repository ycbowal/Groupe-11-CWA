import { createFind } from 'rxjs/internal/operators/find';
import { ControlForm } from './control-form';

describe('ControlForm', () => {
  it('should create an instance', () => {
    expect(new ControlForm()).toBeTruthy();
  });

  /*
  it('control mail', ()=>{
    const mel = "bonjour@gmail.com" ; 
    const cf = new ControlForm() ; 
    expect(cf.controlMail(mel)).toEqual(true) ; 
  }); 

  it('control mail', ()=>{
    const tel = "0756481478" ; 
    const cf = new ControlForm() ; 
    expect(cf.controlMail(tel)).toEqual(true) ; 
  }) ; 
  */
});
