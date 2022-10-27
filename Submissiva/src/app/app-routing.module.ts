import { EditIdeaComponent } from './Component/edit-idea/edit-idea.component';
import { EditUserComponent } from './Component/edit-user/edit-user.component';
import { ManageCategoryComponent } from './Component/manage-category/manage-category.component';
import { AddIdeaComponent } from './Component/add-idea/add-idea.component';
import { UserDashComponent } from './Component/user-dash/user-dash.component';
import { AdminDashComponent } from './Component/admin-dash/admin-dash.component';
import { AllIdeasComponent } from './Component/all-ideas/all-ideas.component';
import { AllUsersComponent } from './Component/all-users/all-users.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'all-Users', component: AllUsersComponent },
  { path: 'all-ideas', component: AllIdeasComponent },
  { path: 'admin-dash', component: AdminDashComponent },
  { path: 'user-dash', component: UserDashComponent },
  { path: 'add-idea', component: AddIdeaComponent },
  { path: 'categories', component: ManageCategoryComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'edit-idea', component: EditIdeaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
