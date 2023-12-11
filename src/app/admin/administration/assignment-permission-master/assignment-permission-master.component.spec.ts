import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentPermissionMasterComponent } from './assignment-permission-master.component';

describe('AssignmentPermissionMasterComponent', () => {
  let component: AssignmentPermissionMasterComponent;
  let fixture: ComponentFixture<AssignmentPermissionMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentPermissionMasterComponent]
    });
    fixture = TestBed.createComponent(AssignmentPermissionMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
