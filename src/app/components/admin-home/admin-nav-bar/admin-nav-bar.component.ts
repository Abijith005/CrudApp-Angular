import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
// import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { adminLogin } from 'src/app/store/user.actions';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent {
  input: string | null = null
  create:boolean=false

  constructor(
    private authService: AuthServiceService,
    private store: Store,
    private cookiService:CookieService,
    private router:Router
  ) { }

  searchUsers() {
    if (!this.input) {
      this.authService.getAllUsers().subscribe((res) => {
        this.store.dispatch(adminLogin({ users: res }))
      })
    } else {
      this.input = !this.input?.trim() ? null : this.input
      this.authService.getUsers(this.input).subscribe((res) => {
        this.store.dispatch(adminLogin({ users: res }))
      })

    }
  }

  adminlogOut(){
    this.cookiService.delete('adminToken')
    this.router.navigate(['admin'])
  }


}
