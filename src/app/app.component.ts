import { Component, OnInit  } from '@angular/core';
import * as $ from 'jquery';
import {FirebaseService} from './services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tmdbtask';
  isSignedIn= false
  constructor(){}

  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn=true
    else
    this.isSignedIn=false

  }



}
