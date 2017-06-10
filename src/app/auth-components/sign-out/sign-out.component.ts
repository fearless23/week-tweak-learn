import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
	selector: 'sign-out',
	templateUrl: 'sign-out.component.html'
})

export class SignOutComponent implements OnInit {
  error: any;
  loggedin;
  constructor(public afa: AngularFireAuth) {

     this.afa.authState.subscribe(auth => { 
			if(auth) { 
				this.loggedin = true;
			}
			
		});
  }

  ngOnInit() { }
}