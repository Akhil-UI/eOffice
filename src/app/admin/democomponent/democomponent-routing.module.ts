import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemocomponentComponent } from './democomponent.component';

const routes: Routes = [{ path: '', component: DemocomponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemocomponentRoutingModule { }
