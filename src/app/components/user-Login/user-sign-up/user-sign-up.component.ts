import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from 'src/app/auth-service.service';
import { signUpRes } from 'src/app/interface/user-data';
import { signIn } from 'src/app/store/user.actions';



@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUPComponent {

  constructor(private authService: AuthServiceService,
    private router: Router,
    private cookie: CookieService,
    private store: Store
  ) { }

  name: string = ""
  email: string = ''
  password: string = ""
  confirmPassword: string = ""
  authMessage: string = ''


  onSubmit(form: NgForm) {

    if (!form.valid || form.value.password != form.value.confirmPassword) {
      return
    }

    
    this.authService.signUp(form.value).subscribe(token => {
      
      let details = {
        name:token.name,
        email:token.email
      }
      if (token.access_token) {
        this.store.dispatch(signIn({ userDetails: details }))
        this.authMessage != token.message
        this.router.navigate(['/home'])
      }
      else {
        this.authMessage= token.message!
      }
    }, err => {
      console.log("unknown error" + err);

    })
  }

  clearMessage(){
    this.authMessage=''
  }

}
