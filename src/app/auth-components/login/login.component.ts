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
  error: any;
  constructor(public afa: AngularFireAuth, private router: Router) {

      this.afa.authState.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('');
      }
    });
  }

  /*loginGoogle() {
    this.afa.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }*/
  loginGoogle() {
    this.afa.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
        (success) => {
        this.router.navigate(['']);
      }).catch(
        (err) => {
        this.error = err;
      });
  }

  loginFb() {
    this.afa.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
        (success) => {
        console.log('login with fb done');
        this.router.navigate(['']);
      }).catch(
        (err) => {
          
        this.error = err;
        console.log(this.error.message);
      });
  }

  /*
  loginFb() {
    this.afa.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }*/


  ngOnInit() {
  }

}
