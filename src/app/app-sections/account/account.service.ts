import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AccountService {

  user: Observable<firebase.User>;
  userName;

  constructor(public afa: AngularFireAuth) {
    this.afa.authState.subscribe( data => this.userName = data.displayName);
    this.user = this.afa.authState;
  }

}

