import { RouterModule } from '@angular/router';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './Component/home-page/home-page.component';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { RegisterPageComponent } from './Component/register-page/register-page.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { AllActiveUsersComponent } from './Component/all-active-users/all-active-users.component';
import { EditUserComponent } from './Component/edit-user/edit-user.component';
import { AllIdeasComponent } from './Component/all-ideas/all-ideas.component';
import { CreateIdeaComponent } from './Component/create-idea/create-idea.component';
import { ManageCategoriesComponent } from './Component/manage-categories/manage-categories.component';
import { ViewIdeaComponent } from './Component/view-idea/view-idea.component';
import { CreatePollComponent } from './Component/create-poll/create-poll.component';
import { ShowPollCatComponent } from './Component/show-poll-cat/show-poll-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AdminDashboardComponent,
    AllActiveUsersComponent,
    EditUserComponent,
    AllIdeasComponent,
    CreateIdeaComponent,
    ManageCategoriesComponent,
    ViewIdeaComponent,
    CreatePollComponent,
    ShowPollCatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
