import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMappingComponent } from './user-mapping.component';

describe('UserMappingComponent', () => {
  let component: UserMappingComponent;
  let fixture: ComponentFixture<UserMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMappingComponent]
    });
    fixture = TestBed.createComponent(UserMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
