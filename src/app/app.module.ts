import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserSignUPComponent } from './components/user/user-login/user-sign-up/user-sign-up.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserSignInComponent } from './components/user/user-login/user-sign-in/user-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    UserLoginComponent,
    UserSignUPComponent,
    UserHomeComponent,
    UserSignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
