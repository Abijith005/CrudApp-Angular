import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserData } from 'src/app/interface/user-data';
import { AppState } from 'src/app/store/auth.state';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  userDetails!: UserData | null;
  profileEdit:boolean|null=false
  
  constructor(private store: Store<AppState>) {}
  
  ngOnInit() {
    this.store.select('auth').subscribe((state) => {
      this.userDetails = state.userDetails;     
      this.profileEdit=state.editProfile 
      
    });
    
  }
  editProfile(){
this.profileEdit=true
  }
}
