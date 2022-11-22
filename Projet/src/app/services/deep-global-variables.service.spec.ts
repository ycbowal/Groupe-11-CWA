import { TestBed } from '@angular/core/testing';

import { DeepGlobalVariablesService } from './deep-global-variables.service';

describe('DeepGlobalVariablesService', () => {
  let service: DeepGlobalVariablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepGlobalVariablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
