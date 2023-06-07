import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

constructor(private router:Router,
  
  private cookieService:CookieService){}


  UserLogOut(){
this.cookieService.delete('token')
this.router.navigate([''])

  }
}
