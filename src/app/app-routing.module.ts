import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationStrategy, PathLocationStrategy, HashLocationStrategy  } from '@angular/common';

import { LoginComponent } from './shared/login/login.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'admin', component: AdminComponent },
  {
    path: '', redirectTo: '/login', pathMatch: 'full' // Redirect to 'home' module on root path
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: 'home', redirectTo: '/admin/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' }, 
  
  
  //{ path: '**', component: PageNotFoundComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy } // Use PathLocationStrategy
  ],
  exports: [RouterModule]
})
  
  
export class AppRoutingModule {

  
 }
