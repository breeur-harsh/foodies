import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'users-list', component: UsersListComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
