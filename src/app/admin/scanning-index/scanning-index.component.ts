import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

//import { ErrorStateMatcher } from '@angular/material/core';
import {  NgbDate, NgbDateStruct, NgbCalendar, NgbDatepickerModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

/** Error when invalid control is dirty, touched, or submitted. */
/*export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}*/

@Component({
  selector: 'app-scanning-index',
  templateUrl: './scanning-index.component.html',
  styleUrls: ['./scanning-index.component.scss']
})
export class ScanningIndexComponent implements AfterViewInit{
  active = 1;

  constructor(private cdr: ChangeDetectorRef, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
    

  model3: string;
  model4: string;

  selectedOption: string = 'option1'; // To store the selected radio button option
  option1Value: string;   // To store form data for Option 1
  option2Value: string;   // To store form data for Option 2

  changeLanguage(lang: string) {
    this.translate.use(lang); // Switch the active language
  }

  ngAfterViewInit() {}
}
