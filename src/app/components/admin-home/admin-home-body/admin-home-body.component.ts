import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthServiceService } from 'src/app/auth-service.service';
import { adminResp } from 'src/app/interface/user-data';
import { AppState } from 'src/app/store/auth.state';
import { adminLogin, geteditUser } from 'src/app/store/user.actions';

@Component({
  selector: 'app-admin-home-body',
  templateUrl: './admin-home-body.component.html',
  styleUrls: ['./admin-home-body.component.css']
})
export class AdminHomeBodyComponent implements OnInit {

  usersData!:adminResp|null

  constructor(
    private store:Store<AppState>,
    private authService:AuthServiceService,
    private route:Router
  ){}

  ngOnInit(): void {
    this.store.select('auth').subscribe((state)=>{
      this.usersData=state.users      
    })
  }

  deleteUser(id:string){
    this.authService.deleteUser(id).subscribe(res=>{
    this.store.dispatch(adminLogin({users:res}))
    })
  }

  editUser(id:string){
    
    this.authService.getUserDetails(id).subscribe(res=>{     
      this.store.dispatch(geteditUser({editUserDetails:res}))
      this.route.navigate(['adminHome/edit-user'])
      
    })
  }

  

}
