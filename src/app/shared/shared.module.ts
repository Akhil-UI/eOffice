import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, TemplateRef } from '@angular/core';


import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';

import { NgScrollbarModule, NG_SCROLLBAR_OPTIONS } from 'ngx-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'ngx-easy-table';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { MainsectionComponent } from './components/mainsection/mainsection.component';
import { StatsComponent } from './components/stats/stats.component';
import { TableComponent } from './components/table/table.component';


import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

import { TranslationModule } from './translation.module';
import { ToastrModule } from 'ngx-toastr';

import { NgBootstrapModule } from './ng-bootstarp.module';
import { PrimeNgModule } from './primeng.module';
//import { MaterialModule } from './ng-material/ng-material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavbarComponent,
    MainsectionComponent,
    StatsComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    NgBootstrapModule,
    PrimeNgModule,
    //MaterialModule,
    SharedRoutingModule,
    NgScrollbarModule,
    NgbModule,
    FeatherModule,
    FeatherModule.pick(allIcons),
    ToastrModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIf,
    NgFor,
    JsonPipe,
    NgSelectModule,
    TranslationModule


  ],
  exports: [
    CommonModule,
    NgBootstrapModule,
    PrimeNgModule,
    //MaterialModule,
    HeaderComponent,
    NgbModule,
    FeatherModule,
    ToastrModule,
    SideNavbarComponent,
    MainsectionComponent,
    TableComponent,
    StatsComponent,
    FormsModule,
    TranslationModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    HttpClientModule,
    NgIf,
    NgFor,
    NgSelectModule,
    TableModule,
    

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
