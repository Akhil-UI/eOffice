import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentClassificationMasterComponent } from './document-classification-master.component';

describe('DocumentClassificationMasterComponent', () => {
  let component: DocumentClassificationMasterComponent;
  let fixture: ComponentFixture<DocumentClassificationMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentClassificationMasterComponent]
    });
    fixture = TestBed.createComponent(DocumentClassificationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
