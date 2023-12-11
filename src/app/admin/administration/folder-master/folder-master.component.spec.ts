import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderMasterComponent } from './folder-master.component';

describe('FolderMasterComponent', () => {
  let component: FolderMasterComponent;
  let fixture: ComponentFixture<FolderMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderMasterComponent]
    });
    fixture = TestBed.createComponent(FolderMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
