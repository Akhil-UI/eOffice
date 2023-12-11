import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EjobComponent } from './ejob.component';

const routes: Routes = [
  { path: '', component: EjobComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjobRoutingModule { }
