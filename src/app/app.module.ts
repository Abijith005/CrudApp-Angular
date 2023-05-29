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
import { NavBarComponent } from './components/user-home/nav-bar/nav-bar.component';
import { BodyComponent } from './components/user-home/body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserSignUPComponent,
    UserHomeComponent,
    UserSignInComponent,
    AdminHomeComponent,
    NavBarComponent,
    BodyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
