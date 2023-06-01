import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserData } from './interface/user-data';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  baseUrl = 'http://localhost:3000'

  constructor(private http:HttpClient,
    private cookie:CookieService
    ) { }

    signUp(userDetails:UserData){
      return this.http.post<{access_token:string}>(`${this.baseUrl}/signUp`,userDetails)

    }
}
