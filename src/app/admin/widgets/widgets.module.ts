import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { SharedModule } from '../../shared/shared.module';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetComponent } from './widget.component';


@NgModule({
  declarations: [
    WidgetComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    SharedModule,
    BreadcrumbComponent
  ]
})
export class WidgetsModule { }
