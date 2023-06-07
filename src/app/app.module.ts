import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './components/user-Login/user.component';
import { UserSignUPComponent } from './components/user-Login/user-sign-up/user-sign-up.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserSignInComponent } from './components/user-Login/user-sign-in/user-sign-in.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './components/user-home/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/user.reducers';
import { EditProfileComponent } from './components/user-home/edit-profile/edit-profile.component';
import { AdminComponent } from './components/admin-login/admin.component';
import { AdminNavBarComponent } from './components/admin-home/admin-nav-bar/admin-nav-bar.component';
import { AdminHomeBodyComponent } from './components/admin-home/admin-home-body/admin-home-body.component';
import { EditUserComponent } from './components/admin-home/edit-user/edit-user.component';
import { CreateUserComponent } from './components/admin-home/create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserSignUPComponent,
    UserHomeComponent,
    UserSignInComponent,
    AdminHomeComponent,
    BodyComponent,
    EditProfileComponent,
    AdminComponent,
    AdminNavBarComponent,
    AdminHomeBodyComponent,
    EditUserComponent,
    CreateUserComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,FormsModule,
    HttpClientModule,StoreModule.forRoot({auth:authReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
