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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AdminDashboardComponent,
    AllActiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
