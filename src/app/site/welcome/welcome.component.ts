import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
	selector: 'welcome',
	templateUrl: 'welcome.component.html',
	styleUrls:['welcome.component.css']
})

export class WelcomeComponent implements OnInit {
	loggedin = false;
	error: any;
	userName;
  	constructor(public af: AngularFire) {

		this.af.auth.subscribe(auth => { 
			if(auth) { this.loggedin = true;}
			this.userName = auth.auth.displayName
		});
  }
	ngOnInit() { }
}