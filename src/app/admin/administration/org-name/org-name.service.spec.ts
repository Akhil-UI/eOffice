import { TestBed } from '@angular/core/testing';

import { OrgNameService } from './org-name.service';

describe('OrgNameService', () => {
  let service: OrgNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
