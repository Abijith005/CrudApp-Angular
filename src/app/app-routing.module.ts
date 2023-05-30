import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user-Login/user.component';
import { UserSignInComponent } from './components/user-Login/user-sign-in/user-sign-in.component';
import { UserSignUPComponent } from './components/user-Login/user-sign-up/user-sign-up.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [{path:'',component:UserComponent,
children:[
  {path:"",component:UserSignInComponent},
  {path:"register",component:UserSignUPComponent}
]
},
{path:'home',component:UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
