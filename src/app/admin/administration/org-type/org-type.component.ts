import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild, } from '@angular/core';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import Validation from '../../../shared/validation';
import { Tabledata, data } from '../../../../assets/data-form';
import { API, Columns, APIDefinition, DefaultConfig, Config } from 'ngx-easy-table';

@Component({
  selector: 'app-org-type',
  templateUrl: './org-type.component.html',
  styleUrls: ['./org-type.component.scss']
})
export class OrgTypeComponent implements OnInit{

  form: FormGroup = new FormGroup({
    privilegeName: new FormControl(''),
    privilegeAribic: new FormControl(''),
   
  });
  submitted = false;

  @ViewChild('table') table: APIDefinition;

  public configuration: Config;
  public columns: Columns[];
  public data: Tabledata[] = [];
  public selected = new Set();


  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        orgTypeName: ['', Validators.required],
        orgTypeAribic: ['', Validators.required],
        topLevel: ['', Validators.required],
      }
      
    );

    this.columns = [
      { key: 'sno', title: 'S.No', width: '5%' },
      { key: 'orgTypeName', title: 'Orgtype Name' },
      { key: 'orgTypeNameAr', title: 'Orgtype Name Ar' },
      { key: 'status', title: 'Status'},
      { key: 'CreatedBy', title: 'CreatedBy' },
      { key: 'updatedON', title: 'Created On / Updated On' }
    ];
    this.data = data;

    this.configuration = { ...DefaultConfig };
    //this.configuration.infiniteScroll = true;
    this.configuration.paginationEnabled = false;
    this.configuration.searchEnabled = true;
    this.configuration.rows = 15;
    this.configuration.resizeColumn = true;
    this.configuration.fixedColumnWidth = false;
    //this.configuration.checkboxes = true;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  onChange(row: any): void {
    const index = this.data.indexOf(row);
    if (this.selected.has(index)) {
      this.selected.delete(index);
    } else {
      this.selected.add(index);
    }
  }
}
