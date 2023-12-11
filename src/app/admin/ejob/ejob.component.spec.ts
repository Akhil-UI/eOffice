import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjobComponent } from './ejob.component';

describe('EjobComponent', () => {
  let component: EjobComponent;
  let fixture: ComponentFixture<EjobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjobComponent]
    });
    fixture = TestBed.createComponent(EjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
