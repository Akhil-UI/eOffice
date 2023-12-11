import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';


const primeNgModule = [
  ButtonModule,
  TreeModule,
  TreeSelectModule

]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...primeNgModule
  ],
  exports: [
    ...primeNgModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PrimeNgModule { 


}
