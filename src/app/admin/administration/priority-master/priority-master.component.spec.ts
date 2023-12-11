import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityMasterComponent } from './priority-master.component';

describe('PriorityMasterComponent', () => {
  let component: PriorityMasterComponent;
  let fixture: ComponentFixture<PriorityMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriorityMasterComponent]
    });
    fixture = TestBed.createComponent(PriorityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
