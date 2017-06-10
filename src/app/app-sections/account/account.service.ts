import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AccountService {
   user: Observable<firebase.User>;
   userName;
  constructor(public afa: AngularFireAuth, private router: Router) {
    this.afa.authState.subscribe( data => {this.userName = data.displayName; console.log(this.userName+"account");});
    this.user = this.afa.authState;
  }

   logout() {
     this.afa.auth.signOut();
     this.router.navigateByUrl('/signout');
     console.log('logged out');
  }
 
  

}

