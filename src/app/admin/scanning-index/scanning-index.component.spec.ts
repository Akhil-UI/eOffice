import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanningIndexComponent } from './scanning-index.component';

describe('ScanningIndexComponent', () => {
  let component: ScanningIndexComponent;
  let fixture: ComponentFixture<ScanningIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScanningIndexComponent]
    });
    fixture = TestBed.createComponent(ScanningIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
