import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProfileService {
  
  constructor(public afdb: AngularFireDatabase, public afa: AngularFireAuth) {}

  ngOnInit() {}
}
