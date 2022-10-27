import { EditUserComponent } from './edit-user/edit-user.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { AddIdeaComponent } from './add-idea/add-idea.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { HomeComponent } from './home/home.component';
import { AllIdeasComponent } from './all-ideas/all-ideas.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
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
  { path: 'categories', component: ManageCategoriesComponent },
  { path: 'edit-user', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
