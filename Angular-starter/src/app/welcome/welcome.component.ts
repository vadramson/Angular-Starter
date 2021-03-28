import { Component, OnInit } from '@angular/core';
import {ApiCommService} from "../services/api-comm.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: string;
  email: string;
  dataSource: any;

  constructor(private external: ApiCommService, private router: Router) {
      this.name = localStorage.getItem('name')
      this.email = localStorage.getItem('email')
  }
  responseData: any;
  authenticated = 'Unauthorized';

  authenticationData = {"username":"", "password":""}

  ngOnInit(): void {
  }

  login(){
    this.external.postData(this.authenticationData, 'login_user/').subscribe((response: any) =>
    {
      // console.log(response)
      localStorage.setItem('token', response.token)
      localStorage.setItem('name', response.Name)
      localStorage.setItem('email', response.email)
      localStorage.setItem('authenticated', 'Authorized')
      this.authenticated = localStorage.getItem('authenticated')
      this.router.navigate([''])
    }
    )
  }

}
