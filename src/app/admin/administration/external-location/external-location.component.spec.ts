import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLocationComponent } from './external-location.component';

describe('ExternalLocationComponent', () => {
  let component: ExternalLocationComponent;
  let fixture: ComponentFixture<ExternalLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalLocationComponent]
    });
    fixture = TestBed.createComponent(ExternalLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
