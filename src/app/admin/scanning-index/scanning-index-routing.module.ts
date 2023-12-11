import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanningIndexComponent } from './scanning-index.component';

const routes: Routes = [
  { path: '', component: ScanningIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanningIndexRoutingModule { }
