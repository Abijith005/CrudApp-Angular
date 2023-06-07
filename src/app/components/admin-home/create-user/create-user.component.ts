import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthServiceService } from 'src/app/auth-service.service';
import { AppState } from 'src/app/store/auth.state';
import { adminLogin } from 'src/app/store/user.actions';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  
    constructor(private service:AuthServiceService,
      private router:Router,
      private store:Store<AppState>
      ){}
      name:string=''
      password:string=''
      email:string=''
    
    
      onSubmit(form:NgForm){
    if (!form.valid) {
      return
    }
    this.service.createUser(form.value).subscribe((res)=>{  
      
      this.store.dispatch(adminLogin({users:res}))
    this.router.navigate(['/adminHome'])
    })
      }
    
    
    
    
    

}
