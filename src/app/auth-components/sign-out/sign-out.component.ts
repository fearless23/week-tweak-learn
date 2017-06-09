import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';



@Component({
	selector: 'sign-out',
	templateUrl: 'sign-out.component.html'
})

export class SignOutComponent implements OnInit {
  error: any;
  loggedin;
  constructor(public af: AngularFire) {

     this.af.auth.subscribe(auth => { 
			if(auth) { 
				this.loggedin = true;
			}
			
		});
  }

  ngOnInit() { }
}