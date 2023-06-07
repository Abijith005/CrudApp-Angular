import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from 'src/app/auth-service.service';
import { login } from 'src/app/store/user.actions';
import { AppState } from 'src/app/store/auth.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})

export class UserSignInComponent {

constructor(
 private authService:AuthServiceService,
 private router:Router,
 private cookieService:CookieService,
 private store:Store<AppState>
){}

email:string=""
password:string=''
authMessage:string=''
messageColour:string=''

onSubmit(form:NgForm){  
  if (!form.valid) {
    return
  }
  else{
   this.authService.login(form.value).subscribe(res=>{    
    
if (res.access_token) {  
  let cookieOptions:any={
    secure:true,
    sameSite:'None',
  }
  const maxAge:number=1000 * 60 * 60 * 24 * 7
  cookieOptions.maxAge=maxAge
  cookieOptions.expires=new Date(Date.now()+maxAge)
  this.cookieService.set('token', res.access_token,cookieOptions)
  this.cookieService.set('email',res.email!,cookieOptions)
  this.store.dispatch(login({userDetails:res}));
  this.router.navigate(['/home'])
}
else{
  this.authMessage=res.message!
  console.log('login Error',res.message);
  
}
   }) 
  }
}
}
