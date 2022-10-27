import { AllActiveUsersComponent } from './Component/all-active-users/all-active-users.component';
import { RegisterPageComponent } from './Component/register-page/register-page.component';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'all-users', component: AllActiveUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
