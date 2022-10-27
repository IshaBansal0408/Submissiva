import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { AdminDashComponent } from './Component/admin-dash/admin-dash.component';
import { UserDashComponent } from './Component/user-dash/user-dash.component';
import { AllUsersComponent } from './Component/all-users/all-users.component';
import { AllIdeasComponent } from './Component/all-ideas/all-ideas.component';
import { EditUserComponent } from './Component/edit-user/edit-user.component';
import { EditIdeaComponent } from './Component/edit-idea/edit-idea.component';
import { ManageCategoryComponent } from './Component/manage-category/manage-category.component';
import { AddIdeaComponent } from './Component/add-idea/add-idea.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminDashComponent,
    UserDashComponent,
    AllUsersComponent,
    AllIdeasComponent,
    EditUserComponent,
    EditIdeaComponent,
    ManageCategoryComponent,
    AddIdeaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
