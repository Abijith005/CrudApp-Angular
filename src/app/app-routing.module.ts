import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user-Login/user.component';
import { UserSignInComponent } from './components/user-Login/user-sign-in/user-sign-in.component';
import { UserSignUPComponent } from './components/user-Login/user-sign-up/user-sign-up.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { adminHomeGuard, adminLoginGuard, userHome, userLogin } from './guard/auth.guard';
import { AdminComponent } from './components/admin-login/admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CreateUserComponent } from './components/admin-home/create-user/create-user.component';
import { EditUserComponent } from './components/admin-home/edit-user/edit-user.component';


const routes: Routes = [{path:'',component:UserComponent,canActivate:[userLogin],
children:[
  {path:"",component:UserSignInComponent},
  {path:"register",component:UserSignUPComponent}
]
},
{path:'home',component:UserHomeComponent,canActivate:[userHome]},
{path:'admin',component:AdminComponent,canActivate:[adminLoginGuard]},
{path:'adminHome',component:AdminHomeComponent,canActivate:[adminHomeGuard]},
{path:'adminHome/create-user',component:CreateUserComponent},
{path:'adminHome/edit-user',component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
