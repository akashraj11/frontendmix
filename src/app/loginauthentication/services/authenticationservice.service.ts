import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from '../user';
@Injectable({
  providedIn: 'root'
  
})
export class AuthenticationserviceService {

  constructor(private http: HttpClient) { }

  login(username:string,password:string)
  {
   // this.user().userId=username;
    //this.user.password=password;
    console.log(username);
    return this.http.post<any>('http://localhost:8091/user/login',{"userId":username,"password":password})
    .subscribe((data)=>{
      console.log("data in service",data);
    },
    (error)=>{console.log(error)});
  }
  logout()
  {
    localStorage.removeItem('çurrentUser');
  }
}
//JSON.stringify(this.user)
//{username:username,password:password}
//.pipe(map(user=>{
 /* if(user&&user.token)
  {
    localStorage.setItem('currentUser',JSON.stringify(user));
  }
  return user;
}))*/