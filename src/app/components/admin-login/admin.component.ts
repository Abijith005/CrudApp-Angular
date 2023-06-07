import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from 'src/app/auth-service.service';
import { AppState } from 'src/app/store/auth.state';
import { adminLogin } from 'src/app/store/user.actions';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(
    private authService:AuthServiceService,
    private router:Router,
    private store:Store<AppState>,
    private cookieService:CookieService
  ){}

  email:string=""
  password:string=""
  authMessage:string=""


  onSubmit(form:NgForm){    
    this.authService.adminLogin(form.value).subscribe((res)=>{  
      if (res.access_token) {
        this.cookieService.set('adminToken',res.access_token)
        this.store.dispatch(adminLogin({users:res}))
        this.router.navigate(['/adminHome'])
      }
      
    })

  }

}
