import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class AccountService {
  user;
  constructor(private http: Http, public af: AngularFire,private router: Router) {
    this.af.auth.subscribe(data => { 
      if(data) { this.user = data.auth }
      });
   }

   logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/signout');
     console.log('logged out');
  }
 
  

}

