import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTypeComponent } from './org-type.component';

describe('OrgTypeComponent', () => {
  let component: OrgTypeComponent;
  let fixture: ComponentFixture<OrgTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgTypeComponent]
    });
    fixture = TestBed.createComponent(OrgTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
