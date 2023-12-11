import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { DemocomponentRoutingModule } from './democomponent-routing.module';
import { DemocomponentComponent } from './democomponent.component';


@NgModule({
  declarations: [
    DemocomponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemocomponentRoutingModule
  ]
})
export class DemocomponentModule { 

}
