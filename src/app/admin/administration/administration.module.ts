import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { SharedModule } from '../../shared/shared.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { CountryMasterComponent } from './country-master/country-master.component';
import { StateMasterComponent } from './state-master/state-master.component';
import { PrivilegeMasterComponent } from './privilege-master/privilege-master.component';
import { PriorityMasterComponent } from './priority-master/priority-master.component';
import { DocumentClassificationMasterComponent } from './document-classification-master/document-classification-master.component';
import { DocumentTypeMasterComponent } from './document-type-master/document-type-master.component';
import { ExternalLocationComponent } from './external-location/external-location.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { ActionMasterComponent } from './action-master/action-master.component';
import { AssignmentPermissionMasterComponent } from './assignment-permission-master/assignment-permission-master.component';
import { OrgTypeComponent } from './org-type/org-type.component';
import { OrgNameComponent } from './org-name/org-name.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { UserMappingComponent } from './user-mapping/user-mapping.component';
import { FolderMasterComponent } from './folder-master/folder-master.component';
import { FolderPermissionComponent } from './folder-permission/folder-permission.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    CountryMasterComponent,
    StateMasterComponent,
    PrivilegeMasterComponent,
    PriorityMasterComponent,
    DocumentClassificationMasterComponent,
    DocumentTypeMasterComponent,
    ExternalLocationComponent,
    RoleMasterComponent,
    ActionMasterComponent,
    AssignmentPermissionMasterComponent,
    OrgTypeComponent,
    OrgNameComponent,
    UserMasterComponent,
    UserMappingComponent,
    FolderMasterComponent,
    FolderPermissionComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    BreadcrumbComponent
  ]
})
export class AdministrationModule { }
