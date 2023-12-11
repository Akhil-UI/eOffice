import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: '', redirectTo: 'country-master', pathMatch: 'full',
  },
  {
    path: 'country-master', component: CountryMasterComponent,
    data: {
      title: 'Country Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Country Master' }],
    },
  },
  {
    path: 'state-master', component: StateMasterComponent,
    data: {
      title: 'State Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'State Master' }],
    },
  },
  {
    path: 'privilege-master', component: PrivilegeMasterComponent,
    data: {
      title: 'Privilege Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Privilege Master' }],
    },
  },
  {
    path: 'priority-master', component: PriorityMasterComponent,
    data: {
      title: 'Priority Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Priority Master' }],
    },
  },
  {
    path: 'classification-master', component: DocumentClassificationMasterComponent,
    data: {
      title: 'Classification Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Classification Master' }],
    },
  },
  {
    path: 'type-master', component: DocumentTypeMasterComponent,
    data: {
      title: 'Type Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Type Master' }],
    },
  },
  {
    path: 'location-master', component: ExternalLocationComponent,
    data: {
      title: 'Location Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Location Master' }],
    },
  },
  {
    path: 'role-master', component: RoleMasterComponent,
    data: {
      title: 'Role Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Role Master' }],
    },
  },
  {
    path: 'action-master', component: ActionMasterComponent,
    data: {
      title: 'Action Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Action Master' }],
    },
  },
  {
    path: 'permission-master', component: AssignmentPermissionMasterComponent,
    data: {
      title: 'Permission Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Permission Master' }],
    },
  },
  {
    path: 'org-type', component: OrgTypeComponent,
    data: {
      title: 'Org Type',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Org Type' }],
    },
  },
  {
    path: 'org-name', component: OrgNameComponent,
    data: {
      title: 'Org Name',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Org Name' }],
    },
  },
  {
    path: 'user-master', component: UserMasterComponent,
    data: {
      title: 'User Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'User Master' }],
    },
  },
  {
    path: 'user-mapping', component: UserMappingComponent,
    data: {
      title: 'User Mapping',
      urls: [{ title: 'Home', url: '/home' }, { title: 'User Mapping' }],
    },
  },
  {
    path: 'folder-master', component: FolderMasterComponent,
    data: {
      title: 'Folder Master',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Folder Master' }],
    },
  },
  {
    path: 'folder-permission', component: FolderPermissionComponent,
    data: {
      title: 'Folder Permission',
      urls: [{ title: 'Home', url: '/home' }, { title: 'Folder Permission' }],
    },
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
  
export class AdministrationRoutingModule { }
