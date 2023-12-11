import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ejob',
  templateUrl: './ejob.component.html',
  styleUrls: ['./ejob.component.scss']
})
export class EjobComponent implements AfterViewInit  {
  // Declare a ViewChild to access the Quill editor component
  @ViewChild('editor', { static: true }) editorComponent: QuillEditorComponent;
  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  
  // Event handlers with specific event types
  focus(event: QuillEditorComponent) {
    console.log('Quill editor focused', event);
  }

  blur(event: QuillEditorComponent) {
    console.log('Quill editor blurred', event);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang); // Switch the active language
  }

  ngAfterViewInit() {}
}
