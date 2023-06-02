import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent {



constructor(
 private authService:AuthServiceService,
 private router:Router,
 private cookieService:CookieService
){}

email:string=""
password:string=''
authMessage:string=''
messageColour:string=''

onSubmit(form:NgForm){
  console.log(form.value);
  
  if (!form.valid) {
    return
  }
  else{
   this.authService.login(form.value).subscribe(res=>{
    
if (res.access_token) {
  let cookieOptions:any={
    secure:true,
    sameSite:'None'
  }
  const maxAge:number=1000 * 60 * 60 * 24 * 7

  cookieOptions.maxAge=maxAge
  cookieOptions.expires=new Date(Date.now()+maxAge)
  this.cookieService.set('token', res.access_token,cookieOptions)
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
