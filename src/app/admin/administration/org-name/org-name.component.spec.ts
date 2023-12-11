import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgNameComponent } from './OrgNameComponent';

describe('OrgNameComponent', () => {
  let component: OrgNameComponent;
  let fixture: ComponentFixture<OrgNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgNameComponent]
    });
    fixture = TestBed.createComponent(OrgNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
