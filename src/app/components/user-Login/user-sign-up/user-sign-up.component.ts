import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUPComponent {

  name:string=""
  email:string=''
  password:string=""
  confirmPassword:string=""

  onSubmit(form:NgForm){
    if (!form.valid||form.value.password!=form.value.confirmPassword) {
      return 
    }
    
      console.log(form.value.password);

    
    
  }

}
