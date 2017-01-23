import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedin = false;
  error: any;
  constructor(public af: AngularFire,private router: Router) {

      this.af.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/');
        this.loggedin = true;
      }
    });
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }


  ngOnInit() {
  }

}
