import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ScanningIndexRoutingModule } from './scanning-index-routing.module';
import { ScanningIndexComponent } from './scanning-index.component';

import { TranslationModule } from '../../shared/translation.module';

@NgModule({
  declarations: [
    ScanningIndexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScanningIndexRoutingModule,
    TranslationModule
  ]
})
export class ScanningIndexModule { }
