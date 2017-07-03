import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  error;
  foo;
  constructor(public afa: AngularFireAuth, private router: Router) {}

  ngOnInit() { 
    
  }
  
  loginGoogle() {
    this.afa.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() )
    .then(  success => this.router.navigate(['']) )
    .catch( err     => this.error = err           )
  }

  loginFb() {
    this.afa.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(  success => this.router.navigate([''] ) )
    .catch( err => this.error = err               )
  }
  
  hello(x){
    this.foo = x;
    this.error = x;
  }
}
