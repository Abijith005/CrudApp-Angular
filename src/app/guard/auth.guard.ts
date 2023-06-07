import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { AuthServiceService } from "../auth-service.service";
import { Store } from "@ngrx/store";
import { AppState } from "../store/auth.state";
import { adminLogin, login } from "../store/user.actions";
import jwtDecode from "jwt-decode";




@Injectable({
    providedIn: 'root'
})

export class userLogin implements CanActivate {
    constructor(
        private router: Router,
        private cookieService: CookieService
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = this.cookieService.get('token')
        if (token) {
            return this.router.navigate(['/home'])
        }
        else {
            return true
        }

    }

}

@Injectable({
    providedIn: 'root'
})

export class userHome implements CanActivate {
    constructor(
        private router: Router,
        private cookieService: CookieService,
        private store:Store<AppState>,
        private authService:AuthServiceService
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = this.cookieService.get('token')
        const decode:any=jwtDecode(token)
        if (token) {
        
            this.authService.getuserDetails(decode._id).subscribe(res=>{                
                this.store.dispatch(login({userDetails:res}))
            })
            return true
        }
        else {
            return this.router.navigate([''])
        }

    }

}

@Injectable({
    providedIn: 'root'
})


export class adminHomeGuard implements CanActivate {
    constructor(
        private router: Router,
        private cookieService: CookieService,
        private authService: AuthServiceService,
        private store:Store<AppState>
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = this.cookieService.get('adminToken')

        if (token) {
            this.authService.getAllUsers().subscribe(res => {
                this.store.dispatch(adminLogin({users:res}))
            })
            return true
        }
        else {
            return this.router.navigate(['/admin'])
        }
    }
}

@Injectable({
    providedIn: 'root'
})

export class adminLoginGuard implements CanActivate {
    constructor(
        private router: Router,
        private cookieService: CookieService
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = this.cookieService.get('adminToken')
        if (token) {
            return this.router.navigate(['adminHome'])
        }
        else {
            return true
        }
    }

}