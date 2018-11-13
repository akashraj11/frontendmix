import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationserviceService} from '../services/authenticationservice.service'
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 
  constructor(private router:Router,private authservice: AuthenticationserviceService) { }

  ngOnInit() {
  }
  loginUser(e)
  {
    e.preventDefault();
    console.log(e);

    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    console.log(username+" "+password);
    this.authservice.login(username,password);
    // .subscribe(
    //     (data) => {
    //       console.log("string data",data);
    //       localStorage.setItem('currentUser',data);
    //       console.log("string data",data);
    //         this.router.navigate(['dashboard']);
    //     },
    //     (error) => {
    //        // this.alertService.error(error);
    //         //this.loading = false;
    //     });
    //alert("Invalid Username and Password")
  }
  
}
