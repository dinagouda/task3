import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(public firebaseService : FirebaseService ,private router: Router ) { }

  ngOnInit(): void {
  }

  async onSignup(email:string  ,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.router.navigate(['/home']);
    //this.isSignedIn = true


  }

  async onSignin(email:string  ,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
   // this.isSignedIn = true
    this.router.navigate(['/home']);

  }
  handleLogout(){
    //this.isSignedIn= false

  }

  toggleSignup(){
     $("#login-toggle").css("background-color","#fff");
     $("#login-toggle").css("color","#222");
     $("#signup-toggle").css("background-color","#57b846");
     $("#signup-toggle").css("color","#fff");
     $("#login-form").css("display","none");
     $("#signup-form").css("display","block");
 }
 
 toggleLogin(){
    $("#login-toggle").css("background-color","#57B846");
    $("#login-toggle").css("color","#fff");
    $("#signup-toggle").css("background-color","#fff");
    $("#signup-toggle").css("color","#222");
    $("#signup-form").css("display","none");
    $("#login-form").css("display","block");
 }
}
