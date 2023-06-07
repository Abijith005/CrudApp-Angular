import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from 'src/app/auth-service.service';
import { UserData } from 'src/app/interface/user-data';
import { AppState } from 'src/app/store/auth.state';
import { editUserProfile, login } from 'src/app/store/user.actions';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userDetails!:UserData|null
  profilePic!:File|null
  name:string=''
  
  constructor(private store:Store<AppState>,
    private authService:AuthServiceService,
    private cookieService:CookieService,
    private router:Router){}
    ngOnInit(): void {
      this.store.select('auth').subscribe((state)=>{
        this.userDetails=state.userDetails
        this.name=this.userDetails?.name!
      })
    
      
    }


handleFileInput(event: any) {
  this.profilePic = event.target.files[0];
}

saveEdit(form: NgForm) {
  const email=this.cookieService.get('email')
  const formData = new FormData();
  formData.append('name', this.name);
  formData.append('profilePic', this.profilePic!);
  formData.append('email',email)  
  

  this.authService.editProfile(formData).subscribe((res) => {  
this.store.dispatch(editUserProfile({editProfile:false}))

this.store.dispatch(login({userDetails:res}))
    this.router.navigate(['/home']);
  });


}


}
