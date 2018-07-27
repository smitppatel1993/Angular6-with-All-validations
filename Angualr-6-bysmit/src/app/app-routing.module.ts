import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { LoginComponent } from './auth/login/login.component';
import {AuthGuard} from './auth.guard';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'employee/list', component: EmployeeListComponent },
  { path: 'employee/add', component: NewEmployeeComponent },
  { path: 'employee/edit/:id', component: NewEmployeeComponent },

  // Uncomment after you provide user's token after login from your API 
  { path: 'employee/list', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'employee/add', component: NewEmployeeComponent,canActivate: [AuthGuard] },
  { path: 'employee/edit/:id', component: NewEmployeeComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component:PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
