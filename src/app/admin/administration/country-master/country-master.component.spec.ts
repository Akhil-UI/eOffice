import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMasterComponent } from './country-master.component';

describe('CountryMasterComponent', () => {
  let component: CountryMasterComponent;
  let fixture: ComponentFixture<CountryMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryMasterComponent]
    });
    fixture = TestBed.createComponent(CountryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
