import { AllPollsComponent } from './Component/all-polls/all-polls.component';
import { ShowPollCatComponent } from './Component/show-poll-cat/show-poll-cat.component';
import { CreatePollComponent } from './Component/create-poll/create-poll.component';
import { ViewIdeaComponent } from './Component/view-idea/view-idea.component';
import { UserDashboardComponent } from './Component/user-dashboard/user-dashboard.component';
import { ManageCategoriesComponent } from './Component/manage-categories/manage-categories.component';
import { CreateIdeaComponent } from './Component/create-idea/create-idea.component';
import { AllIdeasComponent } from './Component/all-ideas/all-ideas.component';
import { EditUserComponent } from './Component/edit-user/edit-user.component';
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
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'user', component: UserDashboardComponent },
  { path: 'all-idea', component: AllIdeasComponent },
  { path: 'create-idea', component: CreateIdeaComponent },
  { path: 'categories', component: ManageCategoriesComponent },
  { path: 'view-idea/:id', component: ViewIdeaComponent },
  { path: 'create-poll/:categoryName', component: CreatePollComponent },
  { path: 'poll-cat', component: ShowPollCatComponent },
  { path: 'all-polls', component: AllPollsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
