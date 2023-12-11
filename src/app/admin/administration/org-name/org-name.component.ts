import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { TemplateRef, ViewEncapsulation  } from '@angular/core';
import { ModalDismissReasons, NgbModal  } from '@ng-bootstrap/ng-bootstrap';

import Validation from '../../../shared/validation';
import { TableDataInf } from './tabledata-inf';
import { data } from '../../../../assets/org-name';
import { OrgNameService } from './org-name.service';
import { Subject } from 'rxjs';

import { API, Columns, APIDefinition, DefaultConfig, Config } from 'ngx-easy-table';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-org-name',
  templateUrl: './org-name.component.html',
  styleUrls: ['./org-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class OrgNameComponent implements OnInit{

  form: FormGroup = new FormGroup({
    orgName: new FormControl(''),
    orgAribic: new FormControl(''),
    orgId: new FormControl(''),
    orgType: new FormControl('')
  });
  submitted = false;

  @ViewChild('table') table: APIDefinition;

  dataList: TableDataInf[] = [];
  filterArray: TableDataInf[] = [];
  dataDetail: TableDataInf | null = null;
  config: any;
  selected:any;
  editData: UntypedFormGroup | any;

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public columns: Columns[];
  
  public data: any[] = [];
  public configuration: Config;
  orgData: TableDataInf | null;

  constructor(
    private orgService: OrgNameService,
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { 
   
  }
  
  parentOrgId: number | null = null;
  parentOrgIdm: number | null = null;
  selectedOrg: { id: number; name: string } | undefined;


  orgId: any[] = [
    { id: 1, name: 'Parent Org Id 1' },
    { id: 2, name: 'Parent Org Id 2' },
    { id: 3, name: 'Parent Org Id 3' },
    { id: 4, name: 'Parent Org Id 4' },
  ];


  ngOnInit(): void {  
    this.form = this.formBuilder.group(
      {
        orgName: ['', Validators.required],
        orgAribic: ['', Validators.required],
        orgId: ['', Validators.required],
        orgType: ['', Validators.required],
        parentOrgId: [null], 
        parentOrgIdm: [null], 
      }
      // {
      //   validators: [Validation.match('password', 'confirmPassword')],
      // }
      
    );

    this.form.get('parentOrgId')?.valueChanges.subscribe((selectedOrgId) => {
      this.selectedOrg = this.orgId.find((org) => org.id === selectedOrgId);
    });
    this.form.get('parentOrgIdm')?.valueChanges.subscribe((selectedOrgId) => {
      this.selectedOrg = this.orgId.find((org) => org.id === selectedOrgId);
    });


    this.configuration = { ...DefaultConfig };
    //this.configuration.infiniteScroll = true;
    this.configuration.paginationEnabled = false;
    this.configuration.searchEnabled = true;
    this.configuration.rows = 15;
    this.configuration.resizeColumn = true;
    this.configuration.fixedColumnWidth = false;
    //this.configuration.checkboxes = true;

    this.columns= [
      { key: 'sno', title: 'S.No', width: '5%' },
      { key: 'orgName', title: 'Org Name' },
      { key: 'orgNameAr', title: 'Org Name Ar' },
      { key: 'status', title: 'Status'},
      { key: 'CreatedBy', title: 'Created By' },
      { key: 'updatedON', title: 'Created On / Updated On' },
      { key: 'isActive', title: 'Edit' , searchEnabled: false,  width: '5%'  },
    ];
    this.data = data;
    // this.orgService.getData().subscribe((data) => {
    //   this.data = data;
    // });
    

    this.editData = this.fb.group({
      orgName: ['', Validators.required],
      orgNameAr: ['', Validators.required],
      orgId: ['', Validators.required],
      orgType: ['', Validators.required],
    });

  
    
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



  // onChange(row: any): void {
  //   const index = this.data.indexOf(row);
  //   if (this.selected.has(index)) {
  //     this.selected.delete(index);
  //   } else {
  //     this.selected.add(index);
  //   }
  // }

  onEvent(event: { event: string; value: any }): void {
    this.selected = JSON.stringify(event.value.row, null, 2);
  }


	closeResult = '';

  openModal(content: TemplateRef<any>,  orgData: TableDataInf | null) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
    );
    
    if (orgData != null) {
      this.dataDetail = orgData;
      this.editData?.patchValue({
        orgName: orgData.orgName,
        orgNameAr: orgData.orgNameAr,
      });
    }

  }

  private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

  onEdit() {
    //this.submitted = true;
    
    if (this.orgData) {
      if (this.editData != null) {
        this.orgData.orgName = this.editData.get('orgName')?.value;
       
      }

    }
  }
  
  @ViewChild(NgSelectComponent) ngSelectComponent: NgSelectComponent;

  ngSelectInstances: NgSelectComponent[] = [];

  onReset(): void {
    this.submitted = false;
    this.form.reset();

    if (this.ngSelectComponent && typeof this.ngSelectComponent.clearModel === 'function') {
      this.ngSelectComponent.clearModel();
    }

    for (const selectComponent of this.ngSelectInstances) {

      if (typeof selectComponent.clearModel === 'function') {
        selectComponent.clearModel();
      } else {
        //selectComponent.ngModel = null;
      }
    }

    // this.ngSelectComponent.forEach((selectComponent:any) => {
    //   // For ng-select versions that support clearModel method
    //   if (typeof selectComponent.clearModel === 'function') {
    //     selectComponent.clearModel();
    //   } else {
    //     // Otherwise, reset the ngModel property
    //     selectComponent.ngModel = null;
    //   }
    // });
  }


  

  openBackDropCustomClass(content: TemplateRef<any>) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

	openWindowCustomClass(content: TemplateRef<any>) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

	openSm(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'sm' });
	}

  openLg(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'lg', centered: true });
  }
  
	openXl(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl' });
	}

	openFullscreen(content: TemplateRef<any>) {
		this.modalService.open(content, { fullscreen: true });
	}

	openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}

	openScrollableContent(longContent: TemplateRef<any>) {
		this.modalService.open(longContent, { scrollable: true });
	}

  openModalDialogCustomClass(content: TemplateRef<any>) {
    this.modalService.open(content, { modalDialogClass: 'dark-modal' });
  }

}
