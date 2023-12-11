import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { QuillModule } from 'ngx-quill'

import { SharedModule } from '../../shared/shared.module';
import { EjobRoutingModule } from './ejob-routing.module';
import { EjobComponent } from './ejob.component';

import { TranslationModule } from '../../shared/translation.module';

@NgModule({
  declarations: [
    EjobComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EjobRoutingModule,
    FormsModule,
    QuillModule.forRoot(),
    TranslationModule

  ]

})
export class EjobModule { }
