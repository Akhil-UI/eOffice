import { TestBed } from '@angular/core/testing';

import { ActionMasterService } from './action-master.service';

describe('ActionMasterService', () => {
  let service: ActionMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
