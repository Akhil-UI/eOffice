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
import { Tabledata, data } from '../../../../assets/active-master';
import { API, Columns, APIDefinition, DefaultConfig, Config } from 'ngx-easy-table';
//import { ActionMasterService } from './action-master.service';

@Component({
  selector: 'app-action-master',
  templateUrl: './action-master.component.html',
  styleUrls: ['./action-master.component.scss']
})
  
export class ActionMasterComponent implements OnInit{

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
        actionName: ['', Validators.required],
        actionAribic: ['', Validators.required],
      
      }
      
    );

    this.columns = [
      { key: 'sno', title: 'S.No', width: '5%'  },
      { key: 'actionName', title: 'Action Name' },
      { key: 'actionNameAr', title: 'Action Name Ar' },
      { key: 'status', title: 'Status'},
      { key: 'createdBy', title: 'CreatedBy' },
      { key: 'updatedON', title: 'Created On / Updated On' }
    ];
    this.data = data;

    this.configuration = { ...DefaultConfig };
    //this.configuration.infiniteScroll = true;
    this.configuration.paginationEnabled = false;
    this.configuration.searchEnabled = true;
    //this.configuration.rows = 15;
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



/*
Error

 form: FormGroup = new FormGroup({
    privilegeName: new FormControl(''),
    privilegeAribic: new FormControl(''),
   
  });
  submitted = false;

  @ViewChild('table') table: APIDefinition;

  public configuration: Config;
  public columns: Columns[];
  //public data = [];
  public selected = new Set();
  public data: Tabledata[] = [];
  //public selected = new Set();

  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
   // private actionMasterService: ActionMasterService
  ) {}
  //constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        actionName: ['', Validators.required],
        actionAribic: ['', Validators.required],
      
      }
      
    );

    this.columns = [
      { key: 'sno', title: 'S.No', width: '5%'  },
      { key: 'actionName', title: 'Action Name' },
      { key: 'actionNameAr', title: 'Action Name Ar' },
      { key: 'status', title: 'Status'},
      { key: 'createdBy', title: 'CreatedBy' },
      { key: 'updatedON', title: 'Created On / Updated On' }
    ];
    //this.data = data;

    // You should fetch the table data from your service or API. Replace this with your actual data fetching code.
    // this.actionMasterService.getTableData().subscribe((response) => {
    //   this.data = response;
    //   this.cdr.detectChanges();
    // });

    this.configuration = { ...DefaultConfig };
    //this.configuration.infiniteScroll = true;
    this.configuration.paginationEnabled = false;
    this.configuration.searchEnabled = true;
    //this.configuration.rows = 15;
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


    this.actionMasterService.saveRecord(this.form.value).subscribe((response) => {
      
      this.onReset();
    });

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


*/