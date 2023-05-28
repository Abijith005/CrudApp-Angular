import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent {
userName:string=""
password:string=''

onSubmit(form:NgForm){
  if (!form.valid) {
    return
  }
  else{
    console.log(form);
    
  }
}
}
