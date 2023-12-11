import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { UserGroupRoutingModule } from './user-group-routing.module';
import { UserGroupComponent } from './user-group.component';


@NgModule({
  declarations: [
    UserGroupComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    UserGroupRoutingModule
  ]
})
export class UserGroupModule { }
