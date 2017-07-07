import { Injectable }                from '@angular/core';
import { AngularFireAuth }           from 'angularfire2/auth';
import { AngularFireDatabase,
         FirebaseObjectObservable }  from 'angularfire2/database';

@Injectable()
export class SettingsService {

  userInfo;
  countriesList;

  constructor(public afa: AngularFireAuth, private afdb: AngularFireDatabase) {
    afa.authState.subscribe( data => {
      let url = '/userProfiles/' + data.uid;
      this.userInfo = afdb.object(url);
    });

    this.countriesList = afdb.list('countries-list');
  }
}

