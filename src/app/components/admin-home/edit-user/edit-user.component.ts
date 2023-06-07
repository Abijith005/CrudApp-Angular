import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthServiceService } from 'src/app/auth-service.service';
import { AppState } from 'src/app/store/auth.state';
import { adminLogin } from 'src/app/store/user.actions';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  name:string=''
  email:string=''
  password:string=''
  user_id:string=''

  constructor(
    private service:AuthServiceService,
    private store:Store<AppState> ,
    private route:Router
  ){}

  ngOnInit(): void {
    this.store.select('auth').subscribe(res=>{      
      this.name=res.editUserDetails?.name!
      this.email=res.editUserDetails?.email!
      this.user_id=res.editUserDetails?._id!
    })
    
  }

  onSubmit(form:NgForm){
    if (!form.valid&&form.value.password) {
      return
    }

    form.value._id=this.user_id    
    this.service.editUser(form.value).subscribe((res)=>{ 
      this.store.dispatch(adminLogin({users:res}))
      this.route.navigate(['/adminHome'])
    
    })
      }


}
