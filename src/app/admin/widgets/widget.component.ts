import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  inject, Input} from '@angular/core';
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

import Validation from '../../shared/validation';
import { NgSelectComponent } from '@ng-select/ng-select';

import { TreeNode } from 'primeng/api';
import { NodeService } from '../../shared/services/nodeservice';
import { NgbActiveModal, NgbDatepickerModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ToastrService, ToastrModule } from 'ngx-toastr';

export class NgbdModalContent {
	constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
 
})
export class WidgetComponent implements OnInit{

  selectedFolder: string;


  closeResult = '';
  files!: TreeNode[];
  nodes!: any[];

  disabled: boolean = false;

  formTree!: FormGroup;


  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    singleSelect: new FormControl(''),
    multiSelect: new FormControl(''),
    acceptTerms: new FormControl(false),
    folderSelect: new FormControl(''),
  });
  submitted = false;

  constructor(
    private fb: UntypedFormBuilder,
    private formBuilder: FormBuilder,
    private nodeService: NodeService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { 
   
  }

  singleSelect: number | null = null;
  multiSelect: number | null = null;
  selectedOrg: { id: number; name: string } | undefined;


  single: any[] = [
    { id: 1, name: 'Single 1' },
    { id: 2, name: 'Single 2' },
    { id: 3, name: 'Single 3' },
    { id: 4, name: 'Single 4' },
  ];

  multi: any[] = [
    { id: 1, name: 'Multi 1' },
    { id: 2, name: 'Multi 2' },
    { id: 3, name: 'Multi 3' },
    { id: 4, name: 'Multi 4' },
  ];


  ngOnInit(): void {  
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        email: ['', Validators.required, Validators.email],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
        single: ['', Validators.required], 
        multi: ['', Validators.required], 
        folderSelect: [null, Validators.required],
        singleSelect: [null], 
        multiSelect: [null],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      },
    
    );

    this.form.get('singleSelect')?.valueChanges.subscribe((selectedOrgId) => {
      this.selectedOrg = this.single.find((single) => single.id === selectedOrgId);
    });
  
    
    this.nodeService.getNodes().subscribe((data) => {
      this.files = data;
    });

    this.nodeService.getSelectNodes().subscribe((data) => {
      this.nodes = data;
    });

    this.formTree = new FormGroup({
      selectedNodes: new FormControl()
    });

 
    
  }

  onFolderChange(): void {
    this.selectedFolder = this.form.get('folderSelect')?.value;
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
        
      }
    }

 
  }

    // modal basic
    modalOpen(modalBasic: any) {
      this.modalService
        .open(modalBasic, { ariaLabelledBy: 'modal-basic-title' })
        .result.then(
          (result) => {
            this.closeResult = `Closed with: ${result}`;
          },
          (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          }
        );
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  
    // modal Open Vertically Centered
    modalOpenVC(modalCenter: any) {
      this.modalService.open(modalCenter, {
        centered: true,
      });
    }
  
    // modal Open Backdrop Disabled
    modalOpenBackdrop(modalBackdrop: any) {
      this.modalService.open(modalBackdrop, {
        backdrop: false,
        centered: true,
      });
    }
  
   // modal Open Small
   modalOpensm(modalSmall: any) {
    this.modalService.open(modalSmall, {
      centered: true,
      size: 'sm', // size:'sm' | 'md' | 'lg'
    });
   }
  // modal Open Medium
  modalOpenmd(modalMedium: any) {
    this.modalService.open(modalMedium, {
      centered: true,
      size: 'md', // size:'sm' | 'md' | 'lg'
    });
  }

  // modal Open Large
  modalOpenlg(modalLarge: any) {
    this.modalService.open(modalLarge, {
      centered: true,
      size: 'lg', // size:'sm' | 'md' | 'lg'
    });
  }
  
  
  showSuccess() {
   
    this.toastr.success('You are awesome!', 'Success! dfdf', {
      disableTimeOut: true,
    });
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }
}
