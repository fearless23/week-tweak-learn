import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectsService {

  project;
  db;
  username;
  userId;
  user: Observable<firebase.User>;
  constructor(public afa: AngularFireAuth, private afdb: AngularFireDatabase) {
    /*this.afa.authState.subscribe(auth => { 
      if(auth) { this.userId = auth.uid; this.username = auth.displayName; }
    });*/
    this.user = this.afa.authState;
    this.user.subscribe(data => this.userId = data.photoURL );
    console.log('From Projects Service - '+ this.userId);
    this.db=this.afdb;
   }
 
    

}
