import { Injectable }                from '@angular/core';
import { AngularFireAuth }           from 'angularfire2/auth';
import { AngularFireDatabase,
         FirebaseObjectObservable }  from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import * as firebase  from 'firebase/app';

@Injectable()
export class SettingsService {

  user: Observable<firebase.User>;
  userName;
  userInfo= {};

  constructor(public afa: AngularFireAuth, private afdb: AngularFireDatabase) {
    afa.authState.subscribe( data => {
      this.userName = data.displayName;
      let url = '/users/' + data.uid + '/user-info';
      this.userInfo = afdb.object(url);
    });

    this.user = this.afa.authState;

  }
}

