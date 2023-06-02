import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from 'src/app/auth-service.service';
import { signUpRes } from 'src/app/interface/user-data';



@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUPComponent {

  constructor(private authService:AuthServiceService,
    private router:Router,
    private cookie:CookieService
    ){}

  name:string=""
  email:string=''
  password:string=""
  confirmPassword:string=""
  userMessage:string=''


  onSubmit(form:NgForm){
    
    if (!form.valid||form.value.password!=form.value.confirmPassword) {      
      return 
    }
    
      this.authService.signUp(form.value).subscribe(token=>{
        if (token.access_token) {
          this.userMessage!=token.message
          this.router.navigate(['/home'])
        }
        else{
this.userMessage!=token.message          
        }
      },err=>{
        console.log("unknown erroe"+err);
        
      })
  }

}
